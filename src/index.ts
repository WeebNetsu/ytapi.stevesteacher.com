import express from 'express';
import homeRouter from './routes';
import quotesRouter from './routes/quotes';

const app = express();

app.use('/', homeRouter);
app.use('/quotes', quotesRouter);

app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});
