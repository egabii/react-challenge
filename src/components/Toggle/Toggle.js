import React, { Component } from 'react';
import './_toggle.scss';

export default class Toggle extends Component {

    constructor() {
        super();
        this.state = {
            isOn: false
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    }


    render() {
        return (
            <button onClick={this.handleToggle}>{this.state.isOn ? 'Active': 'Resolve'}</button>
        );
    }
}