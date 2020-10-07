import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    static defaultProps = {
        initCount: 5
    }

    static propTypes = {
        initCount: PropTypes.number
    }

    constructor(props){
        super(props)
        this.state = {
            count: props.initCount,
            step: 1
        }
    }



    addCount = () => {
        const {count, step} = this.state;
        //非同步處理
        this.setState({
            count: count + step,
            step: step + 1
        },()=>{
            this.sendCount();
        })
        // //同步處理
        // this.setState((state)=> ({
        //     count: state.count + state.step,
        //     step: state.step + 1
        // }))
        // this.setState(state=> ({
        //     count: state.count + state.step,
        //     step: state.step + 1
        // }))
        // this.setState(state=> ({
        //     count: state.count + state.step,
        //     step: state.step + 1
        // }))
    }

    sendCount = ()=>{
        fetch('/api/count?value=${this.state.count}')
    };

    render() {
        const {count, step} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.addCount}>+{step}</button>
            </div>
        );
    }
}

export default Counter;