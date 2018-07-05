import React, { Component } from 'react';
import logo from '../logo.png';

import BigForm from './BigForm';
import Checkbox from './Checkbox';
const checkboxes = [0, 1, 2];

export default class App extends Component {

    render() {
        return (
            <div className='container'>
                <img className='logo' src={logo} />
                <h1 className='title'>React Starter</h1>
                <BigForm>
                    {
                        checkboxes.map(id => <Checkbox key={id} id={id}/>)
                    }
                </BigForm>
            </div>
        );
    }
}