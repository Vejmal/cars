import React from 'react';
import './Cars.css'
import Car from './Car/Car'

class Cars extends React.Component {
  constructor(props) {
    super(props)

    this.cars = [
      {
        id: '2323',
        mark: 'Porsche',
        model: '911',
        engineCapacity: 1998,
        horsePower: 450
      }
    ];
  }

  deleteCar(id){
    console.log('Usuwanie notatki id', id);
    const car = [...this.cars].filter(car => car.id !== id);
    this.cars = car;
  }

  render() {

    return (
      <div>
        <p>My cars collection</p>

        {this.cars.map(cars => (
          <Car
            id={cars.id}
            mark={cars.mark}
            model={cars.model}
            engineCapacity={cars.engineCapacity}
            horsePower={cars.horsePower}
            onDelete={(id) => this.deleteCar(id)} />
        ))};

      </div>
    );
  }
}

export default Cars