import React, { Component, createRef } from 'react';
import Child from './parent/Child';
import Child2 from './Child2';

class Parent extends Component {
    //1. 父找子做事情 放child物件用
    childRef = createRef();
    state = {
        count: 0,
        childCount: 0
    };

    addCount = ()=>{
        this.setState({
            count: this.state.count + 1,
        })
    }
    addChildCount = ()=>{
        //呼叫子元件方法
        this.childRef.current.addCount()
    }
    addChildCount2 = ()=>{
        this.setState({
            childCount: this.state.childCount + 1,
        })
    }

    render() {
        return (
            <div>
                <h1>Parent: {this.state.count}</h1>
                <button onClick={this.addCount}>+Parent</button>
                <button onClick={this.addChildCount}>+Child</button>
                {/* 2. 父層將自己的方法給子層props 讓子層能控制父層元件 */}
                <Child ref={this.childRef} addParentCount={this.addCount}/>
                {/* 3. 捨棄子元件狀態 所有值讓父層決定 子層專心取得props即可 */}
                <Child2 count={this.state.childCount}
                    addParentCount={this.addCount}
                    addChildCount={this.addChildCount2} 
                />
            </div>
        );
    }
}

export default Parent;