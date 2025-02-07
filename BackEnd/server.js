import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';

// Configurations
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());


// api routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/users', userRouter);

// Error handler
app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});