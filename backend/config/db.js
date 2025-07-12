//function to connect database
import mongoose from "mongoose";//importing mongoose

export const connectDB = async () => { //async function
    try{ //try catch block
        const conn = await mongoose.connect(process.env.MONGO_URL); //connecting to database
        console.log(`MongoDB Connected: ${conn.connection.host}`);//logging connection
    }catch(error) { //if error
        console.log(`Error: ${error.message}`);//logging error
        process.exit(1); //process code 1 means exit with failure, 0 code means exit with success
    }
}