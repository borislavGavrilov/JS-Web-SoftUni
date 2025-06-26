import jsonwebtoken from 'jsonwebtoken'
import { JWT_AUTH_SECRET } from '../config/index.js';
import InvalidToken from '../models/InvalidToken.js';

export const auth = async (req, res, next) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const user = jsonwebtoken.verify(token, JWT_AUTH_SECRET);

        // Additional check for invalidated tokens
        const isInvalid = await InvalidToken.findOne({ token });

        if (isInvalid) {
            return res.status(401).end();
        }

        req.user = user;

        next();
    } catch (err) {
        res.status(401).end();
    }
};
