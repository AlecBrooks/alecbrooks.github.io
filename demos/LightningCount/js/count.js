/** Updated count.js **/
document.addEventListener("DOMContentLoaded", () => {
    // Function to update the color of the running count box
    function updateRunningCountColor(runningCount) {
        const runningCountBox = document.querySelector(".running-count-box");

        if (runningCount === 0) {
            if (document.body.classList.contains("dark-mode")) {
                runningCountBox.style.backgroundColor = "#2c2c2c"; // Dark mode default
                runningCountBox.style.color = "#f4f4f4"; // Light text for dark background
            } else {
                runningCountBox.style.backgroundColor = "#f4f6f9"; // Light mode default
                runningCountBox.style.color = "#333"; // Dark text for light background
            }
            return;
        }

        let red = 0;
        let green = 0;

        if (runningCount > 0) {
            green = Math.min(255, runningCount * 20); // Increase green as running count goes up
        } else if (runningCount < 0) {
            red = Math.min(255, Math.abs(runningCount) * 20); // Increase red as running count goes down
        }

        runningCountBox.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
        runningCountBox.style.color = "#ffffff"; // Ensure text color is always readable on a colored background
    }

    // Export updateRunningCountColor to global scope for use elsewhere
    window.updateRunningCountColor = updateRunningCountColor;

    // Function to update the running count based on the Hi-Lo system
    function updateRunningCount(history) {
        let runningCount = 0;

        history.forEach(entry => {
            if (entry === "+") {
                runningCount = 0; // Reset running count on shuffle
            } else {
                const [, cardString] = entry.split(".");
                if (cardString) {
                    const cleanCardString = cardString.replace(/[\*\-]/g, "");

                    for (let char of cleanCardString) {
                        switch (char) {
                            case "1": // Ace
                            case "0": // Ten
                                runningCount -= 1;
                                break;
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                                runningCount += 1;
                                break;
                            case "7":
                            case "8":
                            case "9":
                                break;
                            default:
                                console.warn(`Unexpected card value: ${char}`);
                        }
                    }
                }
            }
        });

        const runningCountElement = document.getElementById("runningCount");
        if (runningCountElement) {
            runningCountElement.textContent = runningCount;
        } else {
            console.error('Element with ID runningCount not found.');
        }

        updateRunningCountColor(runningCount);
    }

    // Chart.js for Average Bet by Count
    const ctx = document.getElementById('averageBetChart').getContext('2d');

    const countRange = ["< -9", ...Array.from({ length: 19 }, (_, i) => i - 9), "> 9"];
    let averageBets = Array(21).fill(0);
    let countOccurrences = Array(21).fill(0);

    const averageBetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countRange,
            datasets: [{
                label: 'Average Bet by Count',
                data: averageBets,
                backgroundColor: 'rgba(61, 113, 144, 0.7)',
                borderColor: 'rgba(61, 113, 144, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 3,
            layout: {
                padding: {
                    top: 10,
                    bottom: 10,
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Running Count'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Average Bet ($)'
                    },
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    },
                    type: 'linear'
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });

    function updateAverageBetChart(history) {
        averageBets.fill(0);
        countOccurrences.fill(0);

        let runningCount = 0;

        history.forEach(entry => {
            if (entry === "+") {
                runningCount = 0; // Ensure running count is reset on shuffle
                return; // Skip further processing for shuffle
            }

            const [betString, cardString] = entry.split(".");
            const betValue = parseFloat(betString);

            if (!isNaN(betValue) && betValue !== 0) { // Ignore zero bet values when calculating averages
                let index;
                if (runningCount < -9) {
                    index = 0; // "< -9" category
                } else if (runningCount > 9) {
                    index = 20; // "> 9" category
                } else {
                    index = runningCount + 10; // Shift to handle range from -9 to 9
                }

                countOccurrences[index] += 1;
                averageBets[index] += betValue;
            }

            if (cardString) {
                const cleanCardString = cardString.replace(/[\*\-]/g, "");
                for (let char of cleanCardString) {
                    switch (char) {
                        case "1":
                        case "0":
                            runningCount -= 1;
                            break;
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                            runningCount += 1;
                            break;
                        case "7":
                        case "8":
                        case "9":
                            break;
                        default:
                            console.warn(`Unexpected card value: ${char}`);
                    }
                }
            }
        });

        for (let i = 0; i < averageBets.length; i++) {
            if (countOccurrences[i] > 0) {
                averageBets[i] /= countOccurrences[i];
            } else {
                averageBets[i] = 0; // Ensure that points with no valid bets are shown as 0
            }
        }

        averageBetChart.data.datasets[0].data = averageBets;
        averageBetChart.update();
    }

    window.updateRunningCount = updateRunningCount;
    window.updateAverageBetChart = updateAverageBetChart;

    updateAverageBetChart(JSON.parse(localStorage.getItem("history")) || []);
});
