import {Router} from 'express'

const userController = Router()

userController.get('/users/register' , (req,res) => {
  res.render('user/register')
})



export default userController