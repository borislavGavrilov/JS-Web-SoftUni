import { Router } from "express";
import userService from "../service/userService.js";

const userController = Router()

userController.post('/register' , async (req,res) => {
   const userData = req.body

   const result = await  userService.register(userData)
   
   res.json(result)
  
})

userController.post('/login' , async (req,res) => {
 const {email , password} = req.body 
 
 const result = userService.login(email , password)

 res.json(result)
  
})

userController.get('/logout' , async (req,res) => {
  res.json({ok : true})
})



export default userController