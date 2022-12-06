import React, { useState } from 'react';

function Car(props) {

  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc)
  }

  const editCarHandler = () => {
    props.onEdit({
      brand: props.brand,
      model: props.model,
      engineCapacity: props.engineCapacity,
      horsePower: props.horsePower,
      _id: props.id,
    });
  }

  return (
    <div className='car brand'>
          <p onClick={toggleDesc}>{props.brand}</p>
          {showDesc && (
            <>
            <div className='car model'></div>
            <p>{props.model}</p>
            <div className='car engine-capacity'></div>
            <p>{props.engineCapacity}</p>
            <div className='car horse-power'></div>
            <p>{props.horsePower}</p>
            </>
          )}
          <button onClick={editCarHandler}>EDIT</button>
          <button className='delete' onClick={() => props.onDelete(props.id)}>DELETE</button>
        </div>
  )
}

export default Car;