import Furniture from "../models/furtniture.js"

export default {
    findAll() {

        return Furniture.find()

    },
    create (furnitureData) {
        return Furniture.create(furnitureData)
    }
}