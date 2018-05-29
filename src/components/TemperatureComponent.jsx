import React, { Component } from 'react';

class Temperature extends Component {
  constructor() {
    super()
    this.state = {
      indoor: 22,
      outdoor: 16
    }
  }
  render() {
    return (
      <div className="temperature crd">
        <p className="text-uppercase"><i className="fas fa-thermometer-empty"></i> Temperature</p>
        <div className="row">
          <div className="col text-center">
            <p className="text-uppercase temp-head"><i className="fas fa-home"></i> indoor</p>
            <p className="text-uppercase temp-body"><span className="temp-var">{this.state.indoor}</span><span>&#x2103;</span></p>
          </div>
          <div className="col text-center">
            <p className="text-uppercase temp-head"><i className="fas fa-cloud"></i> outdoor</p>
            <p className="text-uppercase temp-body"><span className="temp-var">{this.state.outdoor}</span><span>&#8451;</span></p>

          </div>

        </div>
      </div>
    );
  }
}

export default Temperature;
