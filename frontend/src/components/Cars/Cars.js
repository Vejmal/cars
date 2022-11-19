import React from 'react';
import './Cars.css';
import Car from './Car/Car';
import NewCar from './NewCar/NewCar';
import Modal from 'react-modal';
import EditCar from './EditCar/EditCar';

class Cars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {
          brand: 'Porsche',
          model: '911',
          engineCapacity: 1998,
          horsePower: 450,
          id: '2323'
        },
        {
          brand: 'Porsche',
          model: '911',
          engineCapacity: 1998,
          horsePower: 450,
          id: '1122'
        },
      ],
      showEditModal: false,
      editCar: {}
    };
  }

  deleteCar(id){
    console.log('Removing car id:', id);
    const cars = [...this.state.cars]
                    .filter(car => car.id !== id);
    this.setState({ cars });
  }

  createCar(car){
    console.log('Adding the car')
    const cars = [...this.state.cars];
    cars.push(car);
    this.setState({ cars });
  }

  editCar(car){
    const cars = [...this.state.cars];
    const index = cars.findIndex(param => param.id === car.id);
    if(index >= 0){
      cars[index] = car;
      this.setState({ cars })
    }
    this.toggleModal();
  }

  toggleModal(){//show or hide Modal
    this.setState({ showEditModal: !this.state.showEditModal })
  }

  editCarHandler(cars) {
    this.toggleModal();
    this.setState({ editCar: cars });
  }

  render() {

    return (
      <div>
        <p>My cars collection</p>

        <NewCar
          onAdd={(car) => this.createCar(car)} />

        <Modal
          isOpen={this.state.showEditModal}
          contentLabel="Edit car">
            <EditCar
              brand={this.state.editCar.brand}
              model={this.state.editCar.model}
              engineCapacity={this.state.editCar.engineCapacity}
              horsePower={this.state.editCar.horsePower}
              id={this.state.editCar.id}
              onEdit={ car => this.editCar(car) } />
              <button onClick={() => this.toggleModal()}>Cancel</button>
          </Modal>

        {this.state.cars.map(car => (
          <Car
            id={car.id}
            brand={car.brand}
            model={car.model}
            engineCapacity={car.engineCapacity}
            horsePower={car.horsePower}
            onEdit={(car) => this.editCarHandler(car)}
            onDelete={(id) => this.deleteCar(id)} />
        ))};

      </div>
    );
  }
}

export default Cars