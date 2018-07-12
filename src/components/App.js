import React, { Component } from 'react';
import logo from '../logo.png';


import ItemsList from './Item/ItemsList';
import Toggle from './Toggle/Toggle';

const Text = (label) => (<h3>{label}</h3>);
const responseItems = [
    {
        item: 1,
        text: 'Hola Mundo'
    },
    {
        item: 2,
        text: 'Hola Mundo 2'
    },
    {
        item: 3,
        text: 'Hola Mundo 3'
    }
];
export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <img className='logo' src={logo} />
                <h1 className='title'>React Starter</h1>
                <ItemsList items={responseItems}>
                    <Text />
                    <Toggle />
                </ItemsList>
            </div>
        );
    }
}