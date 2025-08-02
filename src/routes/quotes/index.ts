import { Hono } from 'hono';
import quoteData from './data';

const quotesRouter = new Hono();
// NOTE: Order of definition of routes matters

// Define user routes here
quotesRouter.get(`/:id`, (c) => {
	const id = c.req.param('id');

	const selectedQuote = quoteData.find((qd) => qd._id === id);

	if (!selectedQuote) {
		return c.json(
			{
				reason: 'Could not find a quote with that ID',
			},
			404,
		);
	}

	return c.json(selectedQuote);
});

// Define user routes here
quotesRouter.get('/', (c) => {
	return c.json(quoteData);
});

// Define user routes here
quotesRouter.get('*', (c) => {
	return c.json(quoteData);
});

// Export the quotesRouter
export default quotesRouter;
