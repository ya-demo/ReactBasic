import React, { Component, createRef } from 'react';

class Reftest extends Component {

    myInput2 = createRef();

    //組建第一次加到頁面上的時候 會執行
    componentDidMount(){
        // this.myInput.focus();

        //官方建議用法
        this.myInput2.current.focus()
    }

    //取得元件
    setRef = (input) => {
         //取得元件 給this使用
        this.myInput = input
        //直接使用
        input.focus()
    };

    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                <input type="text" ref={this.myInput2}/>
            </div>
        );
    }
}

export default Reftest;