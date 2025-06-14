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

    const userData = req.body

    console.log(userData);

   const result = await userService.login(userData)

    res.redirect('/')
    
  
})



export default userController