import express from 'express';
import { notFoundResponse } from '../../responses';
import quoteData from './data';

// userRoutes.js
const quotesRouter = express.Router();

// Define user routes here
quotesRouter.get('/', (req, res) => {
    res.send(quoteData);
});

// Define user routes here
quotesRouter.get(`/:id`, (req, res) => {
    const { id }: { id?: string } = req.params;

    const selectedQuote = quoteData.find(qd => qd._id === id);

    if (!selectedQuote) {
        return notFoundResponse(res, 'Could not find a quote with that ID');
    }

    res.send(selectedQuote);
});

// Export the quotesRouter
export default quotesRouter;
