import Cast from "../../models/create.js";

export default {

  getAll(filter){

    let query = Cast.find()

    if (filter.exclude){

      query = query.nin('_id' , filter.exclude)

    }


    return query
  },

    createActior (data) {
      const cast = new Cast(data)
      return cast.save()
    }
}