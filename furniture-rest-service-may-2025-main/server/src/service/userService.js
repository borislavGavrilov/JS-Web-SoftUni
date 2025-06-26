import User from "../models/User.js"
import { generateToken } from "../utils/token.js"


export default {
  async register(userData){
        
    const createdUser = await User.create(userData)
    const token = generateToken(createdUser)

    return {
        email : createdUser.email ,
        _id : createdUser.id,
        accessToken : token
    }
    }
}