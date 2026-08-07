document.addEventListener("DOMContentLoaded", () => {
    // Function to save the count array to a CSV file
    function saveCountToCSV(countArray) {
        if (!Array.isArray(countArray) || countArray.length === 0) {
            console.error("The count array is empty or not valid.");
            return;
        }

        // Create CSV content from the count array
        const csvContent = countArray.join(",");

        // Create a Blob object with the CSV content
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.download = "count.csv";
        document.body.appendChild(link);
        link.click();

        // Clean up by removing the link element and revoking the Blob URL
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Attach event listener to the save button
    const saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.addEventListener("click", () => {
            // Assuming countArray is available globally
            if (typeof window.countArray !== "undefined") {
                saveCountToCSV(window.countArray);
            } else {
                console.error("countArray is not defined.");
            }
        });
    } else {
        console.error("Save button with ID 'saveButton' not found.");
    }

    // Function to load the count array from a CSV file
    function loadCountFromCSV() {
        // Check if the current count array is empty
        if (window.countArray.length > 0) {
            alert("Please clear the current count history before loading a new file.");
            return;
        }

        // Create an input element to select the CSV file
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".csv";
        input.addEventListener("change", handleFileSelect);
        input.click();
    }

    // Function to handle file selection
    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) {
            console.error("No file selected.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const lines = content.split(",").map(line => line.trim()).filter(line => line !== "");

            // Validate each entry in the CSV file
            for (let line of lines) {
                if (!isValidInput(line)) {
                    alert("Invalid entry in the CSV file: " + line + "\nLoading process aborted.");
                    return;
                }
            }

            // If all entries are valid, load them into both the history and count array
            window.countArray = lines;
            if (typeof window.history !== "undefined") {
                window.history = lines;
            }

            // Save updated count array to local storage
            localStorage.setItem("history", JSON.stringify(window.countArray));

            // Synchronize history variable in the local script scope if available
            if (typeof history !== "undefined") {
                history = lines;
            }

            // Render the updated history log and other updates
            renderHistory(window.countArray);
            updateStats(window.countArray);
            updateRunningCount(window.countArray);
            updateAverageBetChart(window.countArray);

            alert("CSV file loaded successfully.");
        };

        reader.readAsText(file);
    }

    // Function to validate the input format
    function isValidInput(input) {
        // Allow the following formats:
        // 1. A single "+" for shuffling
        // 2. Starts with a number, followed by a dot, then optionally a mix of at least one number and * or -, ending with a dot.
        const regex = /^(\d+\.\d+([*\-]\d*)*\.$|\+)$/;
        return regex.test(input);
    }

    // Attach event listener to the load button
    const loadButton = document.getElementById("loadButton");
    if (loadButton) {
        console.log("Load button found, attaching event listener.");
        loadButton.addEventListener("click", loadCountFromCSV);
    } else {
        console.error("Load button with ID 'loadButton' not found.");
    }

    // Export save and load functions for use in other scripts if needed
    window.saveCountToCSV = saveCountToCSV;
    window.loadCountFromCSV = loadCountFromCSV;
});
