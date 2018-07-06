import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BigForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.children.map(child => !child)
        };
    }

    checkboxOnCheck(id) {
        const checked = this.state.checked.map((value, index) => (id === index) ? !value : value );
        this.setState({ checked });
    }

    stringifyValues() {
        return this.state.checked.reduce((acum, check, index) => acum+' '+index+':'+check, '');
    }

    render() {
        return (
            <div className="form">
                <span>Checked boxes: { this.stringifyValues() }</span>
                {
                    React.Children.map(this.props.children, (child) => {
                        const { props: { id } } = child;
                        return React.cloneElement(child, {
                            onCheck: () => this.checkboxOnCheck(id),
                            checked: this.state.checked[id],
                            id
                        });
                    })
                }
            </div>
        );
    }
}

BigForm.propTypes = {
    children: PropTypes.node.isRequired
};