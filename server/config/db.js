import mongoose from "mongoose";
import colors from 'colors'
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb connected Successfully on port ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log("MongoDb not connected successfully");
    }
}
export default connectDb;