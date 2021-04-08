import React, { Component } from 'react';
import axios from 'axios';
import NewDog from './components/NewDog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    }
  }

  componentDidMount() {
    axios
      .get('/api/dogs')
      .then((response) => {
        this.setState({ dogs: response.data })
      })
      .catch();
  }

  updateDogs = (dogs) => {
    this.setState({ dogs })
  }

  render() {
    return (
      <div className="app_container">
        {this.state.dogs.map((dog) => {
          return (
            <div className="dog_container">
              <img className="star_favorite" src="https://image.flaticon.com/icons/png/512/56/56786.png" alt="favorite" />
              <h1>Name: {dog.name}</h1>
              <h2>Breed: {dog.breed}</h2>
              <h2>Age: {dog.age}</h2>
              <img className="dog_image" src={dog.image} alt="dog_image" />
              <h3>About Me: {dog.bio}</h3>
            </div>
          )
        })}
        <NewDog updateDogs={this.updateDogs} />
      </div>
    )
  }
}

export default App;