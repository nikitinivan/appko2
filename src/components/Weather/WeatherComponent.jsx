import React, { Component } from 'react';
import WeatherSub from './WeatherSubComponent';

class Weather extends Component {
  constructor(){
    super()
    this.state = {
      tomorow: '',
      dayaftertomorow: '',
      datplusone: '',
    }
}  
componentWillMount () {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    

    this.setState({
      tomorow:weekday[d.getDay()+1], 
      dayaftertomorow:weekday[d.getDay()+2], 
      datplusone:weekday[d.getDay()+3], 

    })
}


  render() {
    return (
      <div className="weather crd">
            <p className="text-uppercase"><i className="fas fa-sun"></i> Weather</p>
            <div className="row">

          <WeatherSub day='today' weather="01d"/>  
          <WeatherSub day={this.state.tomorow} weather="03d"/>
          <WeatherSub day={this.state.dayaftertomorow} weather="09d"/>
          <WeatherSub day={this.state.datplusone} weather="09d"/>

        </div>
      </div>
    );
  }
}

export default Weather;
