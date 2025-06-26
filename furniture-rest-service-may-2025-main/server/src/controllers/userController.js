import { Router } from "express";
import userService from "../service/userService.js";

const userController = Router()

userController.post('/register' , async (req,res) => {
   const userData = req.body

   const result = await  userService.register(userData)

   res.json(result)
  
})

userController.post('/login' , async (req,res) => {
  console.log(req.body);

  
})



export default userController