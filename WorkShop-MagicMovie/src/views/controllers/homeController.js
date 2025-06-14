import express from 'express'
import movieService from '../services/movieService.js'

const homeController = express.Router()


homeController.get('/' , async (req,res) => {

    const movies = await movieService.getAll()

    const authToken = req.cookies['auth']

    console.log(req.user);
    

    res.render('home' , {movies})

})

homeController.get('/about' , (req , res) => {
     res.render('about')
})

export default homeController