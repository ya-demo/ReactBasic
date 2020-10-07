import React, {Component, PureComponent} from 'react';

class Item extends PureComponent{

    render(){
        console.log('render', this.props.text)
        return (
            <li>{this.props.text} {this.props.price+1}</li>
            // <li>{this.props.children}</li>
        )
    }
}

export default Item