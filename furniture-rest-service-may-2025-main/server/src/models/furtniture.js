import { Schema , model , Types} from "mongoose";

const furnitureShema = new Schema ({
    make : {
        type : String,
        required : true,
    },
    model : {
        type : String,
        required : true,
    },
    year : {
        type : Number,
        required : true,
    },
    description : {
        type : String ,
        required : true,
        
    } ,
    price : {
        type : Number ,
        required : true,
    } ,
    img : {
        type : String ,
        required : true
    } ,
    material : {
        type : String
    } , 
    owner : [{
        type : Types.ObjectId,
        ref : 'User'
    }]

})

const Furniture = model('Furnitures' , furnitureShema)

export default Furniture