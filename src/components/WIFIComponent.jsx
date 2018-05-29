import React, { Component } from 'react';

class Wifi extends Component {
    constructor() {
        super()
        this.state = {
            check: true,
            status: 'activated',
            color: 'green',
            icon: 'fa fa-check fa-3x'
        }
    }

    changeStatus = () => {
        this.setState(prevState => ({
            check: !prevState.check
        }));
        var newStatus, newColor, newIcon
        if (this.state.check) {
            newColor = 'green'
            newStatus = 'activated'
            newIcon = 'fa fa-check fa-3x'
        }
        else {
            newColor = 'red'
            newStatus = 'deactivated'
            newIcon = 'fa fa-times fa-3x'

        }

        this.setState({
            status: newStatus,
            color: newColor,
            icon: newIcon
        })
    }
    render() {
        return (
            <div className="wifi crd">
                <p className="text-uppercase"><i className="fa fa-wifi"></i> WIFI</p>

                <div className="col text-center" onClick={this.changeStatus}>
                    <p className="checkmark" style={{ color: this.state.color }}><i className={this.state.icon}></i></p>
                    <p className="text-uppercase" style={{ color: this.state.color }}>{this.state.status}</p>
                </div>

            </div>
        );
    }
}

export default Wifi;
