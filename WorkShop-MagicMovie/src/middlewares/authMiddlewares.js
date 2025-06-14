import jsonWebToken from 'jsonwebtoken'
import { jwtsecret } from '../config/config.js '

export const auth = (req,res , next) => {
    const token = req.cookies['auth']

    if(!token){
        return  next()
    }
     try {
         const verify = jsonWebToken.verify(token , jwtsecret)
            
        } catch (error) {  
            res.clearCookie('auth')
            res.redirect('/users/login')
        }
   
    

  next()
}