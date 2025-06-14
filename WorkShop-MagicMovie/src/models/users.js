import { Schema , model , Types} from "mongoose";
import bcrypt from 'bcrypt'
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

UsersShema.pre('save' , async function () {

    //const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , 10)
})
const User = model('Úser' , UsersShema)

export default User