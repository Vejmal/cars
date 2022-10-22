import React from 'react';
import './Cars.css'
import Car from './Car/Car'

class Cars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {
          id: '2323',
          mark: 'Porsche',
          model: '911',
          engineCapacity: 1998,
          horsePower: 450
        },
        {
          id: '1122',
          mark: 'Porsche',
          model: '911',
          engineCapacity: 1998,
          horsePower: 450
        },
      ]
    };
  }

  deleteCar(id){
    console.log('Usuwanie notatki id', id);
    const cars = [...this.state.cars]
                    .filter(car => car.id !== id);
    this.setState({ cars });
  }

  render() {

    return (
      <div>
        <p>My cars collection</p>

        {this.state.cars.map(car => (
          <Car
            id={car.id}
            mark={car.mark}
            model={car.model}
            engineCapacity={car.engineCapacity}
            horsePower={car.horsePower}
            onDelete={(id) => this.deleteCar(id)} />
        ))};

      </div>
    );
  }
}

export default Cars