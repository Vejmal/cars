const express = require('express')
const router = express.Router();

const noteActions = require('../actions/api/carActions')

//get more than one car
router.get('/cars', noteActions.getAllCars)
//get car
router.get('/cars/:id', noteActions.getCar)
//save
router.post('/cars', noteActions.createCar)
//modify
router.put('/cars/:id', noteActions.updateCar)
//delete
router.delete('/cars/:id', noteActions.deleteCar)

module.exports = router;