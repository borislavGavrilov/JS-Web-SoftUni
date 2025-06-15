import Movie from '../../models/movie.js'
import Cast from '../../models/create.js'

export default {
   async getAll () {
         return await Movie.find()
    },

    create(movieData , userId){
         
       const movie = new Movie(movieData)
       movie.owner = userId

       return movie.save()

    },

    async getOne(movieId) {
      
    const movie = await Movie.findById(movieId).populate('casts')

       
    return movie

    },

    async filtron(data){

      let query = Movie.find()
      

      if (data.search){
          //shallowCopy = shallowCopy.filter(movie => movie.title.toLowerCase().includes(data.search.toLowerCase()))

          query = query.find({title : {$regex: new RegExp(data.search , 'i')}})
      }

      if (data.genre){
       // shallowCopy = shallowCopy.filter(movie => movie.genre.toLowerCase() === data.genre.toLowerCase())
        
       query = query.find({genre: data.genre.toLowerCase()})
      }

      if (data.year){
        data.year = Number(data.year)
       // shallowCopy = shallowCopy.filter(movie => movie.year=== data.year)
       query=query.find({year: data.year})
      }

       return query
},
async attach(movieId , castId){

  const needeetMovie = await this.getOne(movieId)

  needeetMovie.casts.push(castId)

  return needeetMovie.save()
},

async delete(movieId) {
  return Movie.findByIdAndDelete(movieId)
} ,

async edit(movieId , newMovieData) {
   return await Movie.findByIdAndUpdate(movieId, newMovieData, { runValidators: true });
}

// async getCasts(movieId){

//   const getMovie = await this.getOne(movieId)

//   const getCasts = await Cast.find().in('_id' , getMovie.casts)

//   return getCasts
// }

}
