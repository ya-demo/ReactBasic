import React, { Component } from 'react';

class Item2 extends Component {
    state = {
        title: 'Message',
        text: 'Hello2'
    }

    constructor(props){
        super(props)
        this.sayHi = this.sayHi.bind(this)
    }

    // sayHi = () => {
    //     this.setState({
    //         text: 'Hi'
    //     });
    // }
    sayHi(){
        this.setState({
            text: 'Hi'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.text}</h3>
                <button onClick={this.sayHi}>Say Hi</button>
            </div>
        );
    }
}

export default Item2;