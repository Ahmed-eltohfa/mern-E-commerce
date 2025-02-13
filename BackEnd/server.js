import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
// import bodyParser from 'body-parser';
import orderRouter from './routes/orderRouter.js';

// Configurations
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));

// api routes

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/order', orderRouter)

// global route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Error handler
app.use((err, req, res, next) => {
    if (res.statusCode === 200) {
        res.status(500);
    }
    res.json({ success: false, message: err.message });
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});