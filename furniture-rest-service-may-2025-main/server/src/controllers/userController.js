import { Router } from "express";

const userController = Router()

userController.post('/register' , async (req,res) => {
  console.log(req.body);
  
})

userController.post('/login' , async (req,res) => {
  console.log(req.body);

  
})



export default userController