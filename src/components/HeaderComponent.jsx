import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super()
    this.state = {
      day: '',
      date: '',
      month: ''
    }
  }
  componentWillMount() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    this.setState({
      day: weekday[d.getDay()],
      date: d.getDate(),
      month: months[d.getMonth()]
    })
  }
  render() {
    return (
      <div className="header">
        <div id="textbox">
          <p className="alignleft">DASHBOARD</p>
          <p className="alignright">{this.state.day}, {this.state.month} {this.state.date}</p>
        </div>
      </div>
    );
  }
}

export default Header;
