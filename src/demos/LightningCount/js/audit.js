/** Updated audit.js **/
document.addEventListener("DOMContentLoaded", () => {
    // Function to check if the count array is empty and set a default array if it is
    function auditCountArray() {
        const defaultArray = [
            "0.1111111111.", "100.3*.", "90.3-.", "80.3-*.", "70.3.", "60.3.", "50.3.", "40.3.", "30.3.", "20.3.",
            "10.3.", "5.3.", "10.3.", "20.3.", "30.3.", "40.3.", "50.3.", "60.3.", "70.3.", "80.3.", "90.3.",
            "100.3.", "+", "5.03.", "5.03.", "5.03*.", "5.03*.", "5.03*.", "5.03*.", "5.03*.", "5.03*.", "5.03-.",
            "5.3-.", "10.03-.", "10.0-3.", "10.0-3.", "10.0-3.", "10.03.", "10.03.", "10.03.", "10.03.", "10.3.",
            "20.03.", "20.03.", "20.03.", "20.03.", "20.03.", "20.03.", "20.03.", "20.3.", "30.03.", "30.03.",
            "30.03.", "30.03.", "30.03.", "30.03.", "30.3.", "40.03.", "40.03.", "40.03.", "40.03.", "40.03.",
            "40.3.", "50.03.", "50.03.", "50.03.", "50.03.", "50.3.", "60.03.", "60.03.", "60.03.", "60.3.",
            "70.03.", "70.03.", "70.3.", "80.03.", "80.3.", "90.03.", "0.0000000000.", "10.03.", "10.03.",
            "10.03.", "10.03.", "10.03.", "10.03.", "10.03.", "10.03.", "10.0.", "20.03.", "20.03.", "20.03.",
            "20.03.", "20.03.", "20.03.", "20.03.", "20.0.", "30.03.", "30.03.", "30.03.", "30.03.", "30.03.",
            "30.03.", "30.0.", "40.03.", "40.03.", "40.03.", "40.03.", "40.03.", "40.0.", "50.03.", "50.03.",
            "50.03.", "50.03.", "50.0.", "60.03.", "60.03.", "60.03.", "60.0.", "70.03.", "70.03.", "70.0.",
            "80.03.", "80.0.", "90.03."
        ];

        // Check if the count array is empty
        if (!window.countArray || window.countArray.length === 0) {
            window.countArray = defaultArray;
            localStorage.setItem("history", JSON.stringify(window.countArray));

            // Update all charts and elements
            if (typeof renderHistory === "function") {
                renderHistory(window.countArray);
            }
            if (typeof updateStats === "function") {
                updateStats(window.countArray);
            }
            if (typeof updateRunningCount === "function") {
                updateRunningCount(window.countArray);
            }
            if (typeof updateAverageBetChart === "function") {
                updateAverageBetChart(window.countArray);
            }
        } else {
            alert("Count array already contains data.");
        }
    }

    // Attach the audit function to the Audit button
    const auditButton = document.getElementById("auditButton");
    if (auditButton) {
        auditButton.addEventListener("click", auditCountArray);
    } else {
        console.error("Audit button with ID 'auditButton' not found.");
    }

    // Export the function for potential use elsewhere
    window.auditCountArray = auditCountArray;
});
