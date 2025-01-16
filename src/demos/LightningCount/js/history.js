document.addEventListener("DOMContentLoaded", () => {
    // Load count array from local storage or start with an empty array
    window.countArray = JSON.parse(localStorage.getItem("history")) || [];

    // Function to render the history in the History Log
    function renderHistory(countArray) {
        const log = document.getElementById("historyLog");
        if (!log) {
            console.error("Element with ID 'historyLog' not found.");
            return;
        }
        log.innerHTML = ''; // Clear the existing log

        // Loop through the count array and create list items for each entry
        countArray.forEach((entry, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = entry;

            // Attach event listener for double-clicking to edit the item
            listItem.addEventListener("dblclick", function() {
                editHistoryEntry(index);
            });

            log.appendChild(listItem);
        });
    }

    // Make renderHistory globally accessible
    window.renderHistory = renderHistory;

    // Function to edit an entry in the history log
    function editHistoryEntry(index) {
        // Prompt the user to edit the value (using a dialog box)
        const newValue = prompt("Edit your entry:", window.countArray[index]);

        // If the user provides a new value, update the count array
        if (newValue !== null) {
            if (isValidInput(newValue.trim())) {
                window.countArray[index] = newValue.trim();
                saveToLocalStorage(); // Save updated count array to local storage
                renderHistory(window.countArray); // Re-render the updated history log
                updateStats(window.countArray); // Update the stats display
                updateRunningCount(window.countArray); // Update the running count
                updateAverageBetChart(window.countArray); // Update the chart
            } else {
                alert("Invalid input format. Please enter a valid string ending with a dot or a plus sign for shuffle.");
            }
        }
    }

    // Function to validate the input format
    function isValidInput(input) {
        // Allow the following formats:
        // 1. A single "+" for shuffling
        // 2. Starts with a number, followed by a dot, then optionally a mix of at least one number and * or -, ending with a dot.
        const regex = /^(\d+\.\d+([*\-]\d*)*\.$|\+)$/;
        return regex.test(input);
    }

    // Helper function to save count array to local storage
    function saveToLocalStorage() {
        localStorage.setItem("history", JSON.stringify(window.countArray));
    }

    // Initial rendering of history
    renderHistory(window.countArray);
});
