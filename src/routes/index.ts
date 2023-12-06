import express from 'express';

// userRoutes.js
const homeRouter = express.Router();

// Define user routes here
homeRouter.get('/', (req, res) => {
    res.send(`<div>
        <p>Whoops, this page has no information on it, were you looking for one of these?</p>

        <ul>
            <li><a href="/quotes">Quotes</a></li>
        </ul>
    </div>`);
});

// Export the homeRouter
export default homeRouter;
