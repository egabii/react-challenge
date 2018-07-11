import React, { Component } from 'react';
import logo from '../logo.png';

import Toggle from './Toggle/Toggle';
/*const checkboxes = [0, 1, 2];
 const onOption = {
    selected: false,
    text: 'Active',
    default: false
};
const offOption = {
    selected: true,
    text: 'New',
    default: true
} */
export default class App extends Component {

    render() {
        return (
            <div className='container'>
                <img className='logo' src={logo} />
                <h1 className='title'>React Starter</h1>
                <Toggle />
            </div>
        );
    }
}