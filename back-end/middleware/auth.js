import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const JWT_SECRET = process.env.JWT_SECRET || "12345"

export async function authMiddleware(req, res, next) {
    //GRAB THE BEARER TOKEN FROM AUTHORIZATION HEADER
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({ success: false, message: "Not authorized, token missing"})
    }

    const token = authHeader.split(' ')[1];

    //VERIFY & ATTACH USER OBJECT

    try {
        const payLoad = jwt.verify(token, JWT_SECRET)
        const user = await User.findById(payLoad.id).select('-password')

        if(!user){
            return res.status(401).json({ success: false, message: "User not found"})
        }
        req.user = user
        next();
    } catch (err) {
        console.log("JWT verification failed");
        return res.status(401).json({ success:false, message: "Token Invalid or expired"})
    }
}