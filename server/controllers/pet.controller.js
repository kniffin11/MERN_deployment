const Pet = require('../models/pet.model');

module.exports.findAllPets = (req,res)=>{
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.createPet = (req,res)=>{
    Pet.create(req.body)
        .then(newPet=>{
            res.json({results: newPet})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.findOnePet = (req,res)=>{
    Pet.findOne({_id: req.params.id})
    .then(onePet =>{
        res.json({results: onePet})
    })
    .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.updatePet = (req,res)=>{
    Pet.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        // technically a black belt feature
        {new: true, runValidators: true},
        )
        .then(updatedPet =>{
            res.json({results: updatedPet})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deletedPet =>{
        res.json({results: deletedPet})
    })
    .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.findRandomPet = (req,res)=>{
    Pet.find()
        .then(allPets=>{
            let randomIdx = Math.floor(Math.random()*allPets.length);

            res.json({results: allPets[randomIdx]})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
    }