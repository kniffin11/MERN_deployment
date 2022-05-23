const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be atleast 3 letters"],
        unique: [true, "Name is taken"],
    }, 
    petType: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be atleast 3 letters"],
    }, 
    petDescription: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be atleast 3 letters"],
    },
    skillOne: {
        type: String,
        required: [false],
    },
    skillTwo: {
        type: String,
        required: [false],
    },
    skillThree: {
        type: String,
        required: [false],
    }
}, {timestamps: true})

const pet = mongoose.model("pet", PetSchema);

module.exports = pet;