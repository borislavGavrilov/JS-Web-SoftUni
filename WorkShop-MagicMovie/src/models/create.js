import { Schema , model } from "mongoose";

const urlRegex =  /^https?:\/\/.+/

const createSchema = new Schema({
    name: {
        type : String,
        required:[true , 'Field name is required'],
    },
    age: {
        type:Number , 
        required:[true , 'Field age is required'],
        max : [100 , 'Max year on actior is 100'],
        min : [3 , 'Min year on actior is 3'],

    },
    born : {
        type:String ,
        required:[true , 'Field born is required'],
    },

    image : {
        type:String,
        required:[true , 'Field Cast image is required'],
        match : [urlRegex , 'This field must start only with HTTP/HTTPS link']
    }

})

const Cast =  model('Cast' , createSchema)

export default Cast