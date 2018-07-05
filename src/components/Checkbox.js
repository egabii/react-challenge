import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, checked, onCheck } = this.props;
        return (
            <div className="checkbox-wrapper">
                <span>checkbox {id}</span>
                <input value={checked} onChange={onCheck} type="checkbox" />
            </div>
        );
    }
}

Checkbox.propTypes = {
    id: PropTypes.number.isRequired,
    checked: PropTypes.bool,
    onCheck: PropTypes.func
};