import React, { Component } from 'react';

class Items3 extends Component {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}

export default Items3;