import mongoose from "mongoose";

export async function dbConnection() {
    try {
        const conn = await mongoose.connect(
            `${process.env.MONGODB_URL}+${process.env.MONGODB_DATABASE}`
        );
        console.log(`database connected, ${conn.connection.host}`);
    } catch (err) {
        return console.log("Didn't connect to database", err.message);
    }
}
