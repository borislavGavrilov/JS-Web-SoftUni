import User from "../models/User.js"
import { generateToken } from "../utils/token.js"
import bcrypt from 'bcrypt'


export default {
  async register(userData){
        
    const createdUser = await User.create(userData)
    const token = generateToken(createdUser)

    return {
        email : createdUser.email ,
        _id : createdUser.id,
        accessToken : token
    }
    },
    async login (email , password){

        const findUser = await User.findOne({email})
        

        if (!findUser){
            throw Error('Wrong username or pass')
        }

        const validatePass = await bcrypt.compare(password , findUser.password)

        if (!validatePass){
            throw Error ('Wrong username or pass')
        }
     
         const token = generateToken(findUser)

        return {
        email : findUser.email ,
        _id : findUser.id,
        accessToken : token
       }

    }
}