import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";
var otp

const generate_otp = ()=>{
  otp = Math.floor(Math.random()*100000)
}

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address} = req.body;
    //validation
    if (!name) {
      return res.send({message: "Name is required" });
    }
    if (!email) {
      return res.send({message: "email is required" });
    }
    if (!password) {
      return res.send({message: "password is required" });
    }
    if (!phone) {
      return res.send({message: "phone is required" });
    }
    if (!address) {
      return res.send({message: "address is required" });
    }

    //check user
    const existingUser = await userModel.findOne({ email });
    ///existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "already registere pz login",
      });
    }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'amaanshaikh786420@gmail.com',
          pass: process.env.GMAIL_PASSWORD
      }
  });
    try {
      const {email} = req.body
      generate_otp()
      var mailOptions = {
        from: 'amaanshaikh786420@gmail.com',
          to: email,
          subject: `OTP verification`,
          text: `Your OTP is ${otp}`
        };
        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              return res.status(400).send({ success:false,message: "Email sent Unsuccessfully", error: error.message })
          } else {
              res.status(200).send({ success:true, message: "Email sent Successfully"})}
      });
  } catch (error) {
    return res.status(400).send({ success:false,message: "Email: Something went wrong", error: error.message })}
    

    //rsgister user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user register succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registeration",
      error,
    });
  }
};

///POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }
    //chech user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "error in login",
        error,
      });
    }
    ///match
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    ///////TOKEN CREATE
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(505).send({
      success: true,
      message: "error in login",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  res.send('protected');
};
