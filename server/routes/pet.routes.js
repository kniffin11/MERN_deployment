const PetController = require('../controllers/pet.controller');
const Pet = require('../models/pet.model');

module.exports = (app)=>{
    // static routes 
    app.get("/api/pet", PetController.findAllPets);
    app.get("/api/pet/random", PetController.findRandomPet);
    app.post("/api/pet/new", PetController.createPet);
    // dynamic routes
    app.get("/api/pet/:id", PetController.findOnePet);
    app.put("/api/pet/update/:id", PetController.updatePet);
    app.delete("/api/pet/delete/:id", PetController.deletePet);
}
