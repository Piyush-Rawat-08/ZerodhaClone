const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req,res)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.json({
                message:"No token found",
                success: false,
            });
        }
        jwt.verify(token,process.env.TOKEN_KEY,async(errors,data)=>{
            if(errors){
                return res.json({
                    message:"Invalid token",
                    success: false,
                });
            }else{
                const user = await User.findById(data.id)
                if(user){
                    return res.json({
                        message: "User verified successfully",
                        success: true,
                        user: user.username,
                    });
                }else{
                    return res.json({
                        message:"user not found",
                        success:false,
                    });
                }
            }
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            message:"Something went wrong",
            success: false,
        });
    }
}
