import React, { useState } from "react";

export default function EditCar(props) {

  const [brand, setBrand] = useState(props.brand)
  const [model, setModel] = useState(props.model)
  const [engineCapacity, setCapacity] = useState(props.engineCapacity)
  const [horsePower, setPower] = useState(props.horsePower)

  const changeBrandHandler = event => {
    const value = event.target.value;
    setBrand(value);
  }

  const changeModelHandler = event => {
    const value = event.target.value;
    setModel(value);
  }

  const changeCapacityHandler = event => {
    const value = event.target.value;
    setCapacity(value);
  }

  const changePowerHanlder = event => {
    const value = event.target.value;
    setPower(value);
  }

  const edditCar = () => {
    const car = {
      brand: brand,
      model: model,
      engineCapacity: engineCapacity,
      horsePower: horsePower,
      _id: props.id
    };
    props.onEdit(car)
  }

  return(
    <div className="car">
      <label>Brand: </label>
      <input type="text" value={ brand } onChange={ changeBrandHandler } />

      <label>Model: </label>
      <input type="text" value={ model } onChange={ changeModelHandler } />

      <label>Engine capacity: </label>
      <input type="text" value={ engineCapacity } onChange={ changeCapacityHandler } />

      <label>HP: </label>
      <input type="text" value={ horsePower } onChange={ changePowerHanlder } />

      <button onClick={() => edditCar()}>Save</button>
    </div>
  );
}