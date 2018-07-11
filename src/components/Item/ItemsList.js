/* import React, { Component } from 'react';

const Text = (label) => (<h3>{label}</h3>);

export default class ItemsList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <ul>
                    {
                        this.props.items.map(item => {
                            return (
                                <li>
                                    <Text label={item.text} />
                                    {/*
                                    <StatusTool >
                                        <div class="resolve">
                                            <Checkbox />
                                        </div>
                                        <div class="btn-toggle">
                                            <Toggle />
                                        </div>
                                    </StatusTool>
                                    *!/}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
} */