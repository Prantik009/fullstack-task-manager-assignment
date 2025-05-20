// import mongoose from "mongoose";
// export const connectDB  = async() =>{
//     await mongoose.connect('mongodb+srv://workingad512:UQASPx0xqr7n2YFD@cluster0.sh3j6vp.mongodb.net/tm').then(() => console.log("DB Connected"))
// }


import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error);
    process.exit(1);
  }
};
