import { Schema ,model , Types} from "mongoose";


let maxYear = new Date().getFullYear() + 5
const urlRegex =  /^https?:\/\/.+/

const moviesSchema = new Schema({
   title:{
    type:String ,
    required:[true , 'This field is required']
   },

   category:{
    type:String ,
    required:[true , 'This field is required']
   },

   genre: {
    type:String ,
    required:[true , 'This field is required']
   },

   director:{
    type:String ,
    required:[true , 'This field is required']
   },

   year:{
    type: Number ,
    required:[true , 'This field is required'],
    min: [1930 , 'Min year is 1930'],
    max: [maxYear , 'Max year is from this year + 5 year afther that'],
   },

   imageUrl: {
      
    type: String ,
    required:[true , 'This field is required'],
    match : [urlRegex , 'This field must start only with HTTP/HTTPS link']
   },

   rating:{
      type:Number,
      required:[true , 'This field is required'],
      min : [1 , 'Min raiting is 1'],
      max : [10 , 'Max raiting is 10']
   },

   description:{
      type:String , 
      required: [true , 'This field is required']

   },
   casts: [{
      type: Types.ObjectId,
      ref: 'Cast'
   }]
})

const Movie = model('Movie' , moviesSchema)

export default Movie