// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        await mongoose.connect(mongoUrl);
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error(' MongoDB Connection Error:', err);
        process.exit(1);
    }
};

export default connectDB;
