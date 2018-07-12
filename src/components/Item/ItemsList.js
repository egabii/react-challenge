import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <ul>
                    {
                        this.props.items.map(item => {
                            return (
                                <li key={item.id}>
                                    { this.props.children}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired
};