import { Hono } from 'hono';
import quotesRouter from './routes/quotes';

const app = new Hono();

app.get('/', (context) => {
	return context.html(`<div>
        <p>Whoops, this page has no information on it, were you looking for one of these?</p>

        <ul>
            <li><a href="/quotes">Quotes</a></li>
        </ul>
    </div>`);
});

app.route('/quotes', quotesRouter);

export default app;
