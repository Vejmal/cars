import React, { useState } from "react";

function NewCar(props) {

  const [showForm, setShowForm] =  useState(false)

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [engineCapacity, setCapacity] = useState('')
  const [horsePower, setPower] = useState('')

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

  const addCar = () => {
    const car = {
      brand: brand,
      model: model,
      engineCapacity: engineCapacity,
      horsePower: horsePower,
    }
    props.onAdd(car);

    setBrand('');
    setModel('');
    setCapacity('');
    setPower('');
    setShowForm(false);
  }

  return (
    showForm ? (
    <div className="car">
      <label>Brand: </label>
      <input type="text" value={ brand } onChange={ changeBrandHandler } />

      <label>Model: </label>
      <input type="text" value={ model } onChange={ changeModelHandler } />

      <label>Engine capacity: </label>
      <input type="text" value={ engineCapacity } onChange={ changeCapacityHandler } />

      <label>HP: </label>
      <input type="text" value={ horsePower } onChange={ changePowerHanlder } />

      <button onClick={() => addCar()}>Add Car</button>
    </div>
    ) : (
      <button onClick={() => setShowForm(true)}>New Car</button>
    )
  );
}

export default NewCar;