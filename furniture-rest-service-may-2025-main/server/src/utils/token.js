import jsonwebtoken from 'jsonwebtoken'
import { JWT_AUTH_SECRET } from '../config/index.js'

export const generateToken = (user) => {
    const payload = {
        email : user.email , 
        id : user.id
    }

   const token =  jsonwebtoken.sign(payload , JWT_AUTH_SECRET , {expiresIn : '2h'})

   return token
}


    
