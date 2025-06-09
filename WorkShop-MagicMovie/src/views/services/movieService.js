import Movie from '../../models/movie.js'

export default {
   async getAll () {
         return await Movie.find()
    },

    create(movieData){
         
       const movie = new Movie(movieData)

       return movie.save()

    },

    async getOne(movieId) {
      
    const movie = await Movie.findById(movieId)
       
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
},
async attach(movieId , castId){

  console.log(movieId);
  
  const needeetMovie = await this.getOne(movieId)

  console.log(needeetMovie);
  

  needeetMovie.casts.push(castId)

  return needeetMovie.save()
}

}
