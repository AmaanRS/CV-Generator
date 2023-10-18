import express from "express";
import {
  registerController,
  loginController,
  testController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();
//routing
//Register || method post
router.post("/register", registerController);

//login||post
router.post("/login", loginController);

//test route
router.get("/test",requireSignIn,isAdmin, testController);

//protected route
router.get('/user-auth',requireSignIn,(res,req)=>
{
  res.statusCode(200).send({ok:true})
})

export default router;
