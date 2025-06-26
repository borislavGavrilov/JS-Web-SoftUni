import Furniture from "../models/Furniture.js"

export default {
    async getAll(filter = {}) {
        let result = await Furniture.find();

        if (filter._ownerId) {
            result = result.filter(furniture => furniture._ownerId == filter._ownerId);
        }

        return result

    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId);
    },
    create(furnitureData, ownerId) {
        return Furniture.create({ ...furnitureData, _ownerId: ownerId });
    },
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId);
    },
    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
    }
}
