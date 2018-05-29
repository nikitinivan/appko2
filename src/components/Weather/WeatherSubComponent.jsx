import React, { Component } from 'react';


class WeatherSub extends Component {

    render() {
        
        return (

            <div className="col text-center">
                <p className="text-uppercase weather-head">{this.props.day}</p>
                <p className="text-uppercase weather-body">
                <img className='weather' src={'/images/weather-icons/' + this.props.weather + '.svg'} alt='Weather' />
                </p>

            </div>

        );
    }
}

export default WeatherSub;
