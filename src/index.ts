import express from 'express';
import dotenv from 'dotenv';
import affirmationRoutes from './routes/affirmationRoutes';
import healthRoutes from './routes/healthRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Use routes
app.use('/api', affirmationRoutes);
app.use('/api', healthRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
