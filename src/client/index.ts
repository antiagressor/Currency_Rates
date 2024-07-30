async function fetchRates() {
    try {
        const response = await fetch('/api/rates');
        const data = await response.json();
        const ratesTable = document.getElementById('rates')!.getElementsByTagName('tbody')[0];
        ratesTable.innerHTML = '';

        for (const [currency, rate] of Object.entries(data.exchangeRates.rates)) {
            const row = ratesTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = currency;
            cell2.textContent = (rate as number).toString();
        }

        document.getElementById('lastUpdated')!.textContent = `Last updated: ${data.lastUpdated}`;
    } catch (error) {
        console.error('Error fetching rates:', error);
    }
}

document.getElementById('refreshButton')!.addEventListener('click', fetchRates);

// Fetch rates initially when the page loads
fetchRates();
