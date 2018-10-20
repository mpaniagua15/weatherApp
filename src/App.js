import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid'
import LocationList from './components/LocationList';
import './App.css';


const cities = [
    'Montevideo,uy',
    'Washington,us',
    'Madrid,es',
    'Paris,fr',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation${city}`);
  };

  render() {
    return (
      <div className="App">

          <LocationList
              cities={ cities }
              onSelectedLocation={ this.handleSelectedLocation }
          />

      </div>
    );
  }
}

export default App;
