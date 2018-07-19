import React, { Component, Fragment } from 'react';
import logo from '../logo.png';
import PropTypes from 'prop-types';
// SERVICES
import { TodoService } from '../services/TodoService';

// COMPONENTS
import ItemsList from './Item/ItemsList';

const Header = ({ logo, title }) => {
    return (
        <div className='container'>
            <img className='logo' src={logo} />
            <h1 className='title'>{title}</h1>
        </div>
    );
};

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        TodoService.fetchTodos()
            .then(todoModels => {
                this.setState({ todos: todoModels });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <Header logo={logo} title={'React Starter'} />
                <ItemsList items={this.state.todos} />
            </Fragment>
        );
    }
}