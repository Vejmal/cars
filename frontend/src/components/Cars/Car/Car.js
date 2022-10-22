import React, { useState } from 'react';

function Car(props) {

  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc)
  }

  return (
    <div className='car mark'>
          <p onClick={toggleDesc}>{props.mark}</p>
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
          <button>edytuj</button>
          <button className='delete' onClick={() => props.onDelete(props.id)}>usuń</button>
        </div>
  )
}

export default Car;