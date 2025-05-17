import express from 'express';
import rateLimit from 'express-rate-limit';
import homeRouter from './routes';
import quotesRouter from './routes/quotes';

const app = express();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
    message:
        'Pwease stawp, I am but a baby server! :(<br/>I understand you may be following a tutorial, but some bad actors have been attacking this educational server.<br/><b>You will be unblocked in a short while</b>',
});

app.use('/', limiter, homeRouter);
app.use('/quotes', limiter, quotesRouter);

app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});
