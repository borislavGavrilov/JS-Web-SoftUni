import { Schema , model } from "mongoose";
import bcrypt from 'bcrypt'

const userShema = new Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
})
userShema.pre('save' , async function () {
    this.password = await bcrypt.hash(this.password , 10)

})

const User = model('Users' , userShema)

export default User