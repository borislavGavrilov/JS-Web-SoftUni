import Cast from "../../models/create.js";

export default {

  getAll(){
    return Cast.find()
  },

    createActior (data) {
      const cast = new Cast(data)
      return cast.save()
    }
}