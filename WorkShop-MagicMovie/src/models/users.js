import { Schema , model , Types } from "mongoose";

const UsersShema = Schema({
    email : {
        type : String , 
        required : true,
    } , 
    password : {
        type : String , 
        required : true,
    }
})

const User = model('Úser' , UsersShema)

export default User