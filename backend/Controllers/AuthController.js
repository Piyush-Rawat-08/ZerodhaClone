const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username,createdAt } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({
        message: "Please fill all the fields"
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        message: "User already exists",
      });
    }
    const user = await User.create({ email, password, username, createdAt: new Date() });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      sameSite: "strict",
    });
    return res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error("=== SIGNUP ERROR ===");
    console.error("Error Message:", error.message);
    console.error("Full Error:", error);
    res.status(500).json({
        message: "Something went wrong: " + error.message,
        success: false,
    });
  }
};


module.exports.Login = async(req,res,next)=>{
  try{
    const {email,password,username} = req.body;
    if ( !email|| !password){
      return res.status(400).json({
        message:"all fields are required",
        success:false,
      });
    };
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({
        message:"User not found",
        success:false,
      });
    }
    const auth = await bcrypt.compare(password,user.password);
    if(!auth){
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }
    const token = createSecretToken(user._id);
    res.cookie("token",token,{
      withCredentials:true,
      httpOnly:true,
      sameSite:"strict",
    });
    return res.status(201).json({
      message:"user Logged in successfully",
      success: true,
      username: user.username,
    });
  } catch(error){
    console.error(error);
    res.status(500).json({
      message: "something went wrong",
      success: false,
    });
  }
}

module.exports.Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
  });
  return res.json({ success: true, message: "Logged out successfully" });
};