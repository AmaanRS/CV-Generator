import Jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = Jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    res.user = decode;
  } catch (error) {
    console.log(error);
  }
};
///admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await usermodel.findById(req.user.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "error in admin middlewre",
      error,
    });
  }
};
