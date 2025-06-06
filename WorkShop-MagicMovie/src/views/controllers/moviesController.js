import express from 'express'
import movieService from '../services/movieService.js'

const moviesController = express.Router()


moviesController.get('/movies/create' , (req,res) => {
   res.render('create')
})

moviesController.post('/movies/create' , (req,res) => {

  console.log(req.body);

  const newMovie = req.body
 
  movieService.create(newMovie)

  res.redirect('/')
  
  
})

moviesController.get('/movies/:movieId/details' , (req,res) => {
   //get movie id from params
   const movieId = req.params.movieId
   
  
   const findetMovie = movieService.getOne(movieId)

   //create dinamic strars raiting movie

   const needetStars = '&#x2605;'.repeat(Math.floor(findetMovie.rating))

   res.render('details' , {findetMovie , needetStars})
 
})

moviesController.get('/movie/search' ,async (req,res) => {

   const filter = req.query

   const movies = await movieService.filtron(filter)

   

  res.render('search' , {movies , filter})

})
export default moviesController