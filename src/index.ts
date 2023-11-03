import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

// app.use('/api', userRoutes);

app.listen(3000);
