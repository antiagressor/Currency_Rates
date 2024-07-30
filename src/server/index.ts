import express, { Request, Response } from 'express';
import axios from 'axios';
import path from 'path';

const app = express();
const port = 3000;

let exchangeRates: any = {};
let lastUpdated: string = '';

// Function for retrieving currency rates
const fetchExchangeRates = async () => {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        exchangeRates = response.data;
        lastUpdated = new Date().toLocaleString();
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
};

// Retrieving currency rates
fetchExchangeRates();

// Route for retrieving the current currency rates
app.get('/api/rates', (req: Request, res: Response) => {
    res.json({ exchangeRates, lastUpdated });
});

// Static files (for HTML-page)
app.use(express.static(path.join(__dirname, '../../dist/public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
