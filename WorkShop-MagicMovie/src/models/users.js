import { Schema , model , Types} from "mongoose";
import bcrypt from 'bcrypt'
const UsersShema = Schema({
    email : {
        type : String , 
        required : true,
        unique: true,
        minLength : 10,
        validate : [/@[\da-zA-Z]+\.[\da-zA-Z]+$/ , 'Invalid email format']
    } , 
    password : {
        type : String , 
        required : true,
        validate : [/^[a-zA-Z0-9]+$/ , 'Should consist only English letters and digits'],
        minLength : [6 , 'Password should be min 6 characters']
    }
})

UsersShema.pre('save' , async function () {

    //const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , 10)
})
const User = model('Úser' , UsersShema)

export default User