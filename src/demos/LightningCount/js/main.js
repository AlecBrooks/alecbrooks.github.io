document.addEventListener("DOMContentLoaded", () => {
    // Load count array from local storage or start with an empty array
    window.countArray = JSON.parse(localStorage.getItem("history")) || [];

    // Step 1: Initial render of history, stats, and running count from local storage if they exist
    if (typeof renderHistory === "function") {
        renderHistory(window.countArray);
    } else {
        console.error("renderHistory function is not defined.");
    }

    updateStats(window.countArray);
    updateRunningCount(window.countArray);
    updateAverageBetChart(window.countArray);
    setInitialTheme();

    // Step 2: Attach event listener to input box for the "Enter" key
    const handInput = document.getElementById("handInput");
    handInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            submitHand();
        }
    });

    // Step 3: Attach event listener to the trash button for clearing history
    const trashButton = document.getElementById("trashButton");
    trashButton.addEventListener("click", function() {
        clearHistory();
    });

    // Step 4: Attach event listener to the theme toggle button
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", toggleTheme);

    // Function to handle submission when Enter is pressed
    function submitHand() {
        const input = handInput.value.trim(); // Get the value from input box

        if (isValidInput(input)) {
            window.countArray.push(input); // Add the value to the count array
            saveToLocalStorage(); // Save updated count array to local storage
            renderHistory(window.countArray); // Update the History Log display
            updateStats(window.countArray); // Update the stats display
            updateRunningCount(window.countArray); // Update the running count
            updateAverageBetChart(window.countArray); // Update the chart display
            handInput.value = ''; // Clear the input box
        } else {
            alert("Invalid input format. Please enter a valid string ending with a dot or a plus sign for shuffle."); // Alert for invalid input
        }
    }

    // Function to clear the count array, local storage, and the display
    function clearHistory() {
        if (confirm("Are you sure you want to delete all history? This action cannot be undone.")) {
            window.countArray = []; // Clear the count array
            saveToLocalStorage(); // Save the cleared count array to local storage
            renderHistory(window.countArray); // Clear the history log display
            updateStats(window.countArray); // Reset the stats display
            updateRunningCount(window.countArray); // Reset the running count display
            updateAverageBetChart(window.countArray); // Reset the chart display
        }
    }

    // Helper function to save count array to local storage
    function saveToLocalStorage() {
        localStorage.setItem("history", JSON.stringify(window.countArray));
    }

    // Function to validate the input format
    function isValidInput(input) {
        // Allow the following formats:
        // 1. A single "+" for shuffling
        // 2. Starts with a number, followed by a dot, then optionally a mix of at least one number and * or -, ending with a dot.
        const regex = /^(\d+\.\d+([*\-]\d*)*\.$|\+)$/;
        return regex.test(input);
    }
});
