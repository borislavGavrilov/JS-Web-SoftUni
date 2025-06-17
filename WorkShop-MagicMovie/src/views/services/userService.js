import User from "../../models/users.js"
import bycrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { jwtsecret } from "../../config/config.js"


export default {
   async  register (email , password , repeatPassword) { 

        const isExistEmailInDb = await User.findOne({email})
        console.log(isExistEmailInDb);
        

        if (isExistEmailInDb){
            throw Error('Email is existing')
        }

         if (password !== repeatPassword){
          throw Error ('Wrong repeated password')
  }
        
        return User.create({email , password})
         
    },

   async login(email , password){

    const findUser = await User.findOne({email})

    if (!findUser){
        return new Error('No findet user with this email!')
    }

    
  
    const isValid = await bycrypt.compare(password , findUser.password)

    if (!isValid){
        return new Error ('Wrong password !')
    }

    const payload = {
        id : findUser.id , 
        email : findUser.email,

    }
  //make it async late
    const token = jsonwebtoken.sign(payload , jwtsecret , {expiresIn : '3h'})


     return token

    }
}