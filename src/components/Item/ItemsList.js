import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Item } from './Item';

export default class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);
        this.handleResolve = this.handleResolve.bind(this);
    }

    handleActive(event) {
        console.log('Handle Active ', event.target.id);
    }

    handleResolve(event) {
        console.log('Resolve ', event.target.id);
    }

    /*     removeItem(event){
            if(event.target.id)
        } */

    render() {
        return (
            <div className='container flex-start'>
                <ul className="list-group">
                    {this.props.items.map(item => {
                        return <Item
                            key={item.id}
                            item={item}
                            handleActive={this.handleActive}
                            handleResolve={this.handleResolve} />;
                    })}
                </ul>
            </div>
        );
    }
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
};