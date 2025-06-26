import { Schema, model, Types } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
        minLength: [4, 'Make should have at least 4 characters'],
    },
    model: {
        type: String,
        required: true,
        minLength: [4, 'Model should have at least 4 characters'],
    },
    year: {
        type: Number,
        required: true,
        min: [1950, 'Year should be at least 1950'],
        max: [2050, 'Year cannot be larger than 2050'],
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description should be at least 10 characters'],

    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Negative price is not allowed!'],
    },
    img: {
        type: String,
        required: true,
        validate: [/^https?:\/\//, 'Invalid image url']
    },
    material: {
        type: String,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;

