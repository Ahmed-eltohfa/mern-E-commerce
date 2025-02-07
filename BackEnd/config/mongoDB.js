import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });
        await mongoose.connect(`${process.env.MONGO_URI}/ecommerce`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB;