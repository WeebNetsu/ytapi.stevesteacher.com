import express from 'express';
import quotesRouter from './routes/quotes';

const app = express();

app.use('/quotes', quotesRouter);

app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});
