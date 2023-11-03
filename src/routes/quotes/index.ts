import express from 'express';

// userRoutes.js
const quotesRouter = express.Router();

const endpoint = '/quotes';

// Define user routes here
quotesRouter.get(endpoint, (req, res) => {
    // Handle GET /users
});

// Export the quotesRouter
export default quotesRouter;
