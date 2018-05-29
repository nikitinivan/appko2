import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class LightSub extends Component {
  render() {
    return (

      <div className="col-6">
        <div className="row text-uppercase">
          <div className="col">
            <p>{this.props.name}</p>
          </div>
          <div className="col">
            <p>{this.props.status} <Toggle defaultChecked={this.props.status} /></p>
          </div>
        </div>
      </div>
    );
  }
}

export default LightSub;
