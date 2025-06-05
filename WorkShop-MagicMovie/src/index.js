import express from 'express'
import handlebars from 'express-handlebars'

import homeController from './views/controllers/homeController.js'
import moviesController  from './views/controllers/moviesController.js'

const app = express()

//Add static middaware
app.use(express.static('./src/public'))

//Add and config view engine
app.engine('hbs' , handlebars.engine({
    extname : 'hbs'
}))

//Set default engine
app.set('view engine' , 'hbs')

//Set default view folder
app.set('views' , './src/views')

//Add body parser
app.use(express.urlencoded());


app.use(homeController)

app.use(moviesController)

app.all('/*url' , (req,res) => {
  res.render('404')
})


app.listen(5000 , () => {console.log('Server is listening on htpp://localhost:5000....')})