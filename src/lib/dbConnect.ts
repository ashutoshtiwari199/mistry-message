import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected with DB')
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        console.log('DB connections Logging ',db);
        connection.isConnected = db.connections[0].readyState;
        console.log('DB Connected successfully')
    } catch (error) {
        console.error('DB Connection Failed', error)
        process.exit(1)
    }
}


export default dbConnect;