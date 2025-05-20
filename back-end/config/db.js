import mongoose from "mongoose";
export const connectDB  = async() =>{
    await mongoose.connect('mongodb+srv://workingad512:UQASPx0xqr7n2YFD@cluster0.sh3j6vp.mongodb.net/tm').then(() => console.log("DB Connected"))
}


//pass - UQASPx0xqr7n2YFD 
//username - workingad512
