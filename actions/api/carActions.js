const Car = require('../../db/models/car')

class CarActions {
  //save car
  async createCar(req, res){
    const brand = req.body.brand;
    const model = req.body.model;
    const engineCapacity = req.body.engineCapacity;
    const horsePower = req.body.horsePower;

    let car;

    try {
      const car = new Car({brand, model, engineCapacity, horsePower})
      await car.save()
    } catch (err) {
      return res.status(422).json({message: err.message})
    }
    res.status(201).json(car)
  }

  //get more than one cars
  async getAllCars(req, res){
    let doc;
    try {
      doc = await Car.find({});
    } catch (err) {
      return res.status(500).json({message: err.message})
    }
    console.log(doc)
    res.status(200).json(doc);
  }

  //get single car
  async getCar(req, res){
    const id = req.params.id;
    const car = await Car.findOne({_id: id})
    res.status(200).json(car)
  }

  //modify cars
  async updateCar(req, res){
    const id = req.params.id;
    const brand = req.body.brand;
    const model = req.body.model;
    const engineCapacity = req.body.engineCapacity;
    const horsePower = req.body.horsePower;

    const car = await Car.findOne({_id: id})
    car.brand = brand;
    car.model = model;
    car.engineCapacity = engineCapacity;
    car.horsePower = horsePower;

    res.status(201).json(car)
  }

  //delete cars
  async deleteCar(req, res){
    const id = req.params.id;
    await Car.deleteOne({_id: id})

    res.sendStatus(204);
  }
}

module.exports = new CarActions()