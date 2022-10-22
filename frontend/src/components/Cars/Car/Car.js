import React from 'react';

function Car(props) {

  props.onDelete(props.id);

  return (
    <div className='car mark'>
          <p>{props.mark}</p>
          <div className='car model'></div>
          <p>{props.model}</p>
          <div className='car engine-capacity'></div>
          <p>{props.engineCapacity}</p>
          <div className='car horse-power'></div>
          <p>{props.horsePower}</p>
          <button>edytuj</button>
          <button className='delete' onClick={() => props.onDelete(props.id)}>usuń</button>
        </div>
  )
}

export default Car;