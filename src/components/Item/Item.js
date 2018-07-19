import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, handleActive, handleResolve }) => {
    return (
        <li className="list-group-item">
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
                            disabled={item.isResolve}>Active</button>
                        <button
                            id={`resolve-${item.id}`}
                            className="btn__resolve btn btn-secondary"
                            onClick={handleResolve}>Resolve</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.array.isRequired,
    handleActive: PropTypes.func.isRequired,
    handleResolve: PropTypes.func.isRequired
};

export default { Item };