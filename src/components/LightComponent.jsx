import React, { Component } from 'react';
import LightSub from './LightSubComponent'


class Light extends Component {
  constructor() {
    super()
    this.state = {
      rooms: [
        {
          name: 'Entrance hall',
          status: true
        },
        {
          name: 'Living room',
          status: false
        },
        {
          name: 'Dining room',
          status: false
        },
        {
          name: 'Bathroom',
          status: true
        },
        {
          name: 'Entrance hall',
          status: false
        },
        {
          name: 'Living room',
          status: true
        },
        {
          name: 'Dining room',
          status: false
        },
        {
          name: 'Bathroom',
          status: true
        }
      ]
    }
  }


  render() {
    return (
      <div className="light crd">
        <p className="text-uppercase "><i className="fa fa-lightbulb"></i> Light</p>
        <div className="text-center light-conent ">
          <div className="row">
            {this.state.rooms.map((room, index) => <LightSub key={index} index={index} name={room.name} status={room.status} />)}
          </div>
        </div>
      </div>

    );
  }
}

export default Light;
