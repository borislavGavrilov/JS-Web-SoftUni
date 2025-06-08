import Cast from "../../models/create.js";

export default {
    createActior (data) {
      const cast = new Cast(data)

      return cast.save()
    }
}