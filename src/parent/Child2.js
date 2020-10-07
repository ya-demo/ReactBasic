import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        const { count, addParentCount, addChildCount } = this.props;
        return (
            <div>
                <h1>Child: {count}</h1>
                <button onClick={addParentCount}>+Parent</button>
                <button onClick={addChildCount}>+Child</button>
            </div>
        );
    }
}

export default Child2;