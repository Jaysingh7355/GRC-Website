import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL!;

const connect = async () => {
  const ConnectionState = mongoose.connection.readyState;
  if (ConnectionState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (ConnectionState === 2) {
    console.log("Connecting to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL!, {
      dbName: "varanasigrc_db",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    console.error("Error connecting to MongoDB", error);
    throw new Error("Error connecting to MongoDB");
  }

  
};



export default connect;
