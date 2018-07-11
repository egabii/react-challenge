import React, { Component, Fragment } from 'react';
import './_toggle.scss';

export default class Toggle extends Component {

    render() {
        return (
            <Fragment>
                <div className="toggle__label">Active</div>
                <div className='toggle-btn'>
                    <div className="toggle-btn__box"></div>
                    {/*                     <label htmlFor="toggle-btn__active">Active</label>
                    <input type="radio" id="toggle-btn__active" />
                    <label htmlFor="toggle-btn__deactive">New</label>
                    <input type="radio" id="toggle-btn__deactive" value="false"/> */}
                </div>
            </Fragment>
        );
    }
}