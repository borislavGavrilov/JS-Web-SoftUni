
import Movie from '../../models/movie.js'

import {v4 as uuid} from 'uuid'

export default {
   async getAll () {
         return await Movie.find().lean()
    },

    create(movieData){
         
       const movie = new Movie(movieData)

        return movie.save()

    },

    getOne(movieId) {
      
    const movie = movies.find(movie => movie.id === movieId)
       
    return movie

    },

    async filtron(data){

      let shallowCopy = await Movie.find()

      console.log(shallowCopy);
      
      

      if (data.search){
          shallowCopy = shallowCopy.filter(movie => movie.title.toLowerCase().includes(data.search.toLowerCase()))
      }

      if (data.genre){
        shallowCopy = shallowCopy.filter(movie => movie.genre.toLowerCase() === data.genre.toLowerCase())

      }

      if (data.year){
        data.year = Number(data.year)
        shallowCopy = shallowCopy.filter(movie => movie.year=== data.year)
      }

       return shallowCopy
} }
