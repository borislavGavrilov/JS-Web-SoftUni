import mongoose, { Schema } from "mongoose";

const moviesSchema = new Schema({
   id: Number,
   title: String ,
   category: String ,
   genre: String,
   director: String,
   year:Number,
   imageUrl: String,
   rating:Number,
   description:String,
})

const Movie = mongoose.model('Movie' , moviesSchema)

export default Movie