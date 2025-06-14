import {Router} from 'express'
import userService from '../services/userService.js'

const userController = Router()

userController.get('/users/register' , (req,res) => {
  res.render('user/register')
})

userController.post('/users/register' , async (req,res) => {
  const data = req.body

   await userService.register(data)


  res.redirect('login')
  
})

userController.get('/users/login' , (req,res) => {
  res.render('user/login')
})

userController.post('/users/login' ,async (req,res) => {

    const {email , password} = req.body

   const token = await userService.login(email , password)

   console.log(token);

    res.redirect('/')
    
  
})



export default userController