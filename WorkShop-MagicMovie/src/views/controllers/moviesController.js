import express from 'express'
import movieService from '../services/movieService.js'
import castService from '../services/castService.js'

const moviesController = express.Router()


moviesController.get('/movies/create' , (req,res) => {
   res.render('create')
})

moviesController.post('/movies/create' , async (req,res) => {
;

  const newMovie = req.body

  const userId = req.user?.id
 
  await movieService.create(newMovie , userId)

  res.redirect('/')
  
  
})

moviesController.get('/movies/:movieId/details' ,async (req,res) => {
   //get movie id from params
   const movieId = req.params.movieId

   const userId = req.user?.id
  

   const findetMovie = await movieService.getOne(movieId)
    
  // const casts = await movieService.getCasts(movieId)

  const isValid = findetMovie.owner == userId

   //create dinamic strars raiting movie

   const needetStars = '&#x2605;'.repeat(Math.floor(findetMovie.rating))

   res.render('details' , {findetMovie , needetStars , isValid})
 
})

moviesController.get('/movies/search' ,async (req,res) => {

   const filter = req.query

   const movies = await movieService.filtron(filter)

   

  res.render('search' , {movies , filter})

})

moviesController.get('/movie/:movieId/attach' , async (req,res) => {
const movieId = req.params.movieId

const movie = await movieService.getOne(movieId)

//get all casts from castService

const casts = await castService.getAll({exclude : movie.casts})

//push it to the attach page dinamic

  res.render('attach' , {movie , casts})
})

moviesController.post('/movie/:movieId/attach' , async (req,res) => {

   //get movie id 
   const movieId = req.params.movieId

   //get cast id 
   const castId = req.body.castId
  
   await movieService.attach(movieId , castId)

   res.redirect(`/movies/${movieId}/details`)
  
})

moviesController.get('/movie/:movieId/delete' , async (req,res) => {
  
   const movieId = req.params.movieId

    await movieService.delete(movieId)

   res.redirect('/')
})

moviesController.get('/movie/:movieId/edit' , async (req,res) => {

   const movieId = req.params.movieId

   const getMovie = await movieService.getOne(movieId)



console.log( getMovie);

  res.render('edit' , {getMovie})
})

moviesController.post('/movie/:movieId/edit' , async (req,res) => {
  const movieId = req.params.movieId
  const movieData = req.body

  await movieService.edit(movieId ,movieData )

  res.redirect('/')
})
export default moviesController