import React, { Component } from 'react';

class Power extends Component {
  constructor() {
    super()
    this.state = {
      water: 22,
      electricity: 41,
      gas: 67
    }
  }
  render() {
    return (
      <div className="power crd">
        <p className="text-uppercase"><i className="fa fa-tachometer-alt"></i> Power</p>
        <div className="row">
          <div className="col text-center">
            <p className="text-uppercase power-head"><i className="fas fa-tint"></i> water</p>
            <p className="text-uppercase power-body">{this.state.water}<span className="text-lowercase">m&#179;</span></p>
          </div>
          <div className="col text-center">
            <p className="text-uppercase power-head"><i className="fas fa-bolt"></i> electricity</p>
            <p className="text-uppercase power-body">{this.state.electricity}<span className="text-lowercase">kw/h</span></p>

          </div>
          <div className="col text-center">
            <p className="text-uppercase power-head"><i className="fas fa-fire"></i> gas</p>
            <p className="text-uppercase power-body">{this.state.gas}<span className="text-lowercase">m&#179;</span></p>

          </div>

        </div>
      </div>
    );
  }
}

export default Power;
