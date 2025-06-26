import User from "../models/User.js"

export default {
  async register(userData){
        
    const createdUser = await User.create(userData)

    return {
        email : createdUser.email ,
        _id : createdUser.id,
        accessToken : ''
    }
    }
}