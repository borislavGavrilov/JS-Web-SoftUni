import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import cookieParser from 'cookie-parser'
import { auth } from './middlewares/authMiddlewares.js'
import routers from './routes.js'

const app = express()

//Add static middaware
app.use(express.static('./src/public'))

//Add and config view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
//Set default engine
app.set('view engine' , 'hbs')

//Set default view folder
app.set('views' , './src/views')

//Add body parser
app.use(express.urlencoded());

//add cookie parser

app.use(cookieParser())

//add authMiddlewares

app.use(auth)

//Conect to database

try {
 await mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'magic-movie' })
 console.log('Succsesful conect to DB!');
 

} catch (error) {
  console.log('Cannot connect to DB!');
}

app.use(routers)


app.listen(5000 , () => {console.log('Server is listening on htpp://localhost:5000....')})