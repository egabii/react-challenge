import React, { Component, Fragment } from 'react';
import logo from '../logo.png';

// SERVICES
import {TodoService} from './services/TodoService';

const todoService = new TodoService();
// COMPONENTS
import ItemsList from './Item/ItemsList';

const Header = () => {
    return (
        <div className='container'>
            <img className='logo' src={logo} />
            <h1 className='title'>React Starter</h1>
        </div>
    );
};

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount(){
        todoService.getTodos()
        .then(todoModels => {
            this.setState({ todos: todoModels });
        });
    }

    render() {
        return (
            <Fragment>
                {Header()}
                <ItemsList items={this.state.todos} />
            </Fragment>
        );
    }
}