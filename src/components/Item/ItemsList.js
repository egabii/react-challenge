import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Item = (item, { handleActive, resolve, isResolve }) => {
    return (
        <li className="list-group-item" key={item.id}>
            <div className="row">
                <div className="col-sm">
                    <h4>{item.data.text}</h4>
                </div>
                <div className="col-sm-auto">
                    <div className="btn-group" role="group">
                        <button
                            id={`active-${item.id}`}
                            className="btn__active btn btn-primary"
                            onClick={handleActive}
                            disabled={isResolve(item.id)}>Active</button>
                        <button
                            id={`resolve-${item.id}`}
                            className="btn__resolve btn btn-secondary"
                            onClick={resolve}>Resolve</button>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);
        this.resolve = this.resolve.bind(this);
    }

    handleActive(event) {
        console.log('Handle Active ', event.target.id);
    }

    resolve(event) {
        console.log('Resolve ', event.target.id);
    }

    isResolve(){
        return false;
    }

    render() {
        return (
            <div className='container flex-start'>
                <ul className="list-group">
                    {this.props.items.map(item => {
                        const { handleActive, resolve, isResolve } = this;
                        return Item(item, { handleActive, resolve, isResolve });
                    })}
                </ul>
            </div>
        );
    }
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
};