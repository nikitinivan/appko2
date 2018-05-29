import React, { Component } from 'react';
import './App.css';

import Header from './components/HeaderComponent'
import Light from './components/LightComponent'
import Power from './components/PowerComponent'
import WIFI from './components/WIFIComponent'
import Alarm from './components/AlarmComponent'
import Temperature from './components/TemperatureComponent'
import Weather from './components/Weather/WeatherComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container cnt">
          <div className="row ">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row bot">
            <div className="col-8">
              <Weather />
            </div>
            <div className="col-4">
              <Temperature />
            </div>
          </div>

          <div className="row bot">
            <div className="col-4">
              <div className="bot">
                <WIFI />
              </div>
              <Alarm />
            </div>
            <div className="col-8">
              <Light />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Power />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
