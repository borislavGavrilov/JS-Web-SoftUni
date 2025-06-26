import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes.js';
import { auth } from './middlewares/authMiddleware.js';


mongoose.connect('mongodb://localhost:27017', { dbName: 'furnitures-may-2025' })
    .then(() => console.log('Successfully connected to DB!'))
    .catch((err) => console.log('Cannot connect to DB: ', err.message));

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     next();
// });

// Add cors middleware
app.use(cors());

// Parse json data sent from the client
app.use(express.json());

// Add auth middleware
app.use(auth);

// Use routes
app.use(routes);

app.listen(3030, () => console.log('Server is listening on http://localhost:3030'));
