const express = require('express')
const router = express.Router();

const CarActions = require('../actions/api/carActions')

//get more than one car
router.get('/cars', CarActions.getAllCars)
//get car
router.get('/cars/:id', CarActions.getCar)
//save
router.post('/cars', CarActions.createCar)
//modify
router.put('/cars/:id', CarActions.updateCar)
//delete
router.delete('/cars/:id', CarActions.deleteCar)

module.exports = router;