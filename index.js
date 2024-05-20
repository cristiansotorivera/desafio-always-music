import 'dotenv/config';
import express from 'express';
import estudiantesRoutes from './routes/estudiantes.route.js';

const app = express();

// Enable parsing of JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for /estudiantes
app.use('/estudiantes', estudiantesRoutes);

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
