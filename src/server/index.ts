import express, { Request, Response } from 'express';
import axios from 'axios';
import path from 'path';

const app = express();
const port = 3000;

let exchangeRates: any = {};
let lastUpdated: string = '';

// Функция для получения курсов валют
const fetchExchangeRates = async () => {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        exchangeRates = response.data;
        lastUpdated = new Date().toLocaleString();
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
};

// Начальное получение курсов валют
fetchExchangeRates();

// Маршрут для получения текущих курсов валют
app.get('/api/rates', (req: Request, res: Response) => {
    res.json({ exchangeRates, lastUpdated });
});

// Статические файлы (для HTML-страницы)
app.use(express.static(path.join(__dirname, '../../dist/public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
