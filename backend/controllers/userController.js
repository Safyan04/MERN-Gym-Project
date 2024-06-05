// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const userModel = require('../models/userModel')
dotenv.config();
exports.registerController = async (req , res) =>{
    try {
        const {name , email , password, cpassword} = req.body;
        // const hashedPassword = await bcrypt.hash(password, 10); //new line add
        const existingEmail = await userModel.findOne({email});
        if(existingEmail){
          res.status(500).send("Email already exist")
        }else{
            const user =  new userModel({
                name,
                email,
                password,
                cpassword
            })
            await user.save();
        //    const user =  new userModel({
        //     username, 
        //     email,
        //     password
        //    });
        //    await user.save();
            res.status(201).json({
                message : "User Created Successful",
                user
            })
        }
       
    } catch (error) {
        console.log(`User Register Error ${error}`);
        res.status(500).json({message:'Server error'})
    }
}
exports.loginController = async (req , res) =>{
    try {
        const {email , password} = req.body;
        
        const user = await userModel.findOne({email});
        // if(!existingEmail){
        //   res.send("Email not matched")
        // }
        if(!user){
        res.status(401).json({
        message : "Email not matched",
        });
        }
        
        const existingPassword = await userModel.findOne({password});
        if(!existingPassword){
           res.send("Password not matched")
        }else
        res.status(200).json({
            message : "Login Successful",
            user,
            token:"sefi"
        })
        // const isPasswordValid = await bcrypt.compare(password, userModel.password);
        // if(!isPasswordValid){
        //    return res.status(401).json({message:'Invalid credentials'});
        // }
        // const token = jwt.sign({userID:user._id}, process.env.secret_Key);
        // res.json({ token });
        // console.log(token);
       
    } catch (error) {
        console.log(`User Login Error ${error}`);
        res.status(500).json({message:'Server error'})
    }
}
exports.logoutController = (req , res) =>{}