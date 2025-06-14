import User from "../../models/users.js"

export default {
    register (data) { 
        
        return User.create(data)
         
    },

   async login(userData){



    }
}