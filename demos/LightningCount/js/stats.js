/** Updated stats.js **/
// Function to update the Win-Loss-Push statistics and other metrics (hands and decks)
function updateStats(history) {
    const winLossPushElement = document.getElementById('winLossPushText');
    const handsCountElement = document.getElementById('handsCount');
    const decksCountElement = document.getElementById('decksCount');
    const maxBetElement = document.getElementById('maxBet');
    const minBetElement = document.getElementById('minBet');
    const avgBetElement = document.getElementById('avgBet');

    if (winLossPushElement && handsCountElement && decksCountElement && maxBetElement && minBetElement && avgBetElement) {
        let winCount = 0, lossCount = 0, pushCount = 0;
        let betValues = [];
        let validHandsCount = 0;

        history.forEach(entry => {
            if (entry === "+") return; // Skip shuffle entries for all calculations

            const [betString, outcomeString] = entry.split('.');
            const betValue = parseFloat(betString);

            if (!isNaN(betValue) && betValue !== 0) { // Only count hands with non-zero bets
                validHandsCount++;
                betValues.push(betValue);
            }

            if (outcomeString) {
                const winSymbols = (outcomeString.match(/\*/g) || []).length;
                const lossSymbols = (outcomeString.match(/-/g) || []).length;

                if (winSymbols > lossSymbols) {
                    winCount++;
                } else if (lossSymbols > winSymbols) {
                    lossCount++;
                } else {
                    pushCount++;
                }
            }
        });

        const totalHands = winCount + lossCount + pushCount;
        const winPercentage = totalHands ? Math.round((winCount / totalHands) * 100) : 0;
        const lossPercentage = totalHands ? Math.round((lossCount / totalHands) * 100) : 0;
        const pushPercentage = totalHands ? Math.round((pushCount / totalHands) * 100) : 0;

        winLossPushElement.textContent = `${winPercentage}% | ${lossPercentage}% | ${pushPercentage}%`;

        // Update Hands and Decks metrics
        handsCountElement.textContent = validHandsCount;
        const decks = history.filter(entry => entry === "+").length; // Count only complete decks
        decksCountElement.textContent = decks;

        // Update Max, Min, and Avg Bet
        if (betValues.length > 0) {
            const maxBet = Math.max(...betValues);
            const minBet = Math.min(...betValues.filter(value => value !== 0));
            const avgBet = Math.round(betValues.reduce((sum, val) => sum + val, 0) / betValues.length);

            maxBetElement.textContent = `$${maxBet}`;
            minBetElement.textContent = `$${minBet}`;
            avgBetElement.textContent = `$${avgBet}`;
        } else {
            maxBetElement.textContent = `$0`;
            minBetElement.textContent = `$0`;
            avgBetElement.textContent = `$0`;
        }
    } else {
        console.error('One or more statistic elements not found.');
    }
}

// Export the function for use in other scripts
window.updateStats = updateStats;
