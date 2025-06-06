import { Schema ,model} from "mongoose";

const moviesSchema = new Schema({
   title: String ,
   category: String ,
   genre: String,
   director: String,
   year:Number,
   imageUrl: String,
   rating:Number,
   description:String,
})

const Movie = model('Movie' , moviesSchema)

export default Movie