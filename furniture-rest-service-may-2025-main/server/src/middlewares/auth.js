import jsonwebtoken from 'jsonwebtoken'
import { JWT_AUTH_SECRET } from '../config/index.js';

export const auth = async (req, res, next) => {
    const token = req.header('x-authorization');
    
    console.log(token);

    next()
    
    
    
};
