const Note = require('../../db/models/car')

class NoteActions {
  //save notes
  async createCar(req, res){
    const mark = req.body.mark;
    const model = req.body.model;

    let car;

    try {
      const car = new Note({mark, model, engineCapacity, horsePower})
      await car.save()
    } catch (err) {
      return res.status(422).json({message: err.message})
    }
    res.status(201).json(car)
  }

  //get more than one notes
  async getAllCars(req, res){
    let doc;
    try {
      doc = await Note.find({});
    } catch (err) {
      return res.status(500).json({message: err.message})
    }
    console.log(doc)
    res.status(200).json(doc);
  }

  //get single notes
  async getCar(req, res){
    const id = req.params.id;
    const note = await Note.findOne({_id: id})
    res.status(200).json(note)
  }

  //modify notes
  async updateCar(req, res){
    const id = req.params.id;
    const mark = req.body.mark;
    const model = req.body.model;
    const engineCapacity = req.body.engineCapacity;
    const horsePower = req.body.horsePower;

    const car = await Note.findOne({_id: id})
    car.mark = mark;
    car.model = model;
    car.engineCapacity = engineCapacity;
    car.horsePower = horsePower;

    res.status(201).json(car)
  }

  //delete notes
  async deleteCar(req, res){
    const id = req.params.id;
    await Note.deleteOne({_id: id})

    res.sendStatus(204);
  }
}

module.exports = new NoteActions()