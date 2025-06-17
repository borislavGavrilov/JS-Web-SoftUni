import {Router} from 'express'
import userService from '../services/userService.js'


const userController = Router()

userController.get('/users/register' , (req,res) => {
  res.render('user/register')
})

userController.post('/users/register' , async (req,res) => {
  const {email , password , repeatPassword} = req.body

  try {
     await userService.register(email , password , repeatPassword)

      res.redirect('login')
    
  } catch (err) { 

    res.render('user/register' , {error : err.message , userEmail: {email}})
    
  }
  
  
})

userController.get('/users/login' , (req,res) => {
  res.render('user/login')
})

userController.post('/users/login' ,async (req,res) => {

    const {email , password} = req.body

    try {
    const token = await userService.login(email , password)

    res.cookie('auth' , token)

    res.redirect('/')
      
    } catch (err) {
       res.render('user/login' , {error : err.message , email})
      
    }

    
  
})

userController.get('/users/logout' , (req,res) => {
  res.clearCookie('auth')
  res.redirect('/')
})



export default userController