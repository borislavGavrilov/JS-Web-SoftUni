import User from "../../models/users.js"
import bycrypt from 'bcrypt'

export default {
    register (data) { 
        
        return User.create(data)
         
    },

   async login(email , password){

    const findUser = await User.find({email})

    if (!findUser){
        return new Error('No findet user with this email!')
    }
  
    const isValid = await bycrypt.compare(password , findUser.password)

    if (!isValid){
        return new Error ('Wrong password !')
    }

    


    }
}