import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import homeController from './views/controllers/homeController.js'
import moviesController  from './views/controllers/moviesController.js'
import castControler from './views/controllers/castController.js'
import userController from './views/controllers/usersController.js'
import cookieParser from 'cookie-parser'

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

//Conect to database

try {
 await mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'magic-movie' })
 console.log('Succsesful conect to DB!');
 

} catch (error) {
  console.log('Cannot connect to DB!');
}


app.use(homeController)

app.use(moviesController)

app.use(castControler)

app.use(userController)


app.all('/*url' , (req,res) => {
  res.render('404')
})


app.listen(5000 , () => {console.log('Server is listening on htpp://localhost:5000....')})