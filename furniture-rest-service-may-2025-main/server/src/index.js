import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes.js';
import { auth } from './middlewares/auth.js';


mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'furnitureDB' })
.then(()=>{ console.log('Succesfuly connect do DB');
}).catch((err) => {
  console.log('Something wrong with DB' , err.message);
  
})

const app = express()

app.use(cors())

app.use(express.json());

app.get('/data/catalog' , (req,res) => {
  res.end('It s work')
})

app.use(routes)

app.use(auth)

app.listen(3030 , () => {console.log('Server is listening on locallHost ://3030...');
})