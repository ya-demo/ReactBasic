import React, { Component } from 'react';
import ProgressBarLine from './ProgressBarLine'

class ProgressBar extends Component {

    state = {
        value: 0
    }

    add = () =>{
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <ProgressBarLine value={value}/>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default ProgressBar;