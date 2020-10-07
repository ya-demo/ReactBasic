import React, { Component } from 'react';

class Text extends Component {
    state = {
        text: ''
    }
    onChange = (e) =>{
        this.setState({ 
            //e.target.value 都是字串 , 因此如果是number都使用 parseInt(e.target.value, 0)來作轉換
            text: e.target.value,

        })
    }
    render() {
        const {text} = this.state
        return (
            <div>
                <input type="text" value={text} onChange={this.onChange}/>
                <h2>{text}</h2>
            </div>
        );
    }
}

export default Text;