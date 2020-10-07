import React, { Component } from 'react';
import Item from './Item';

const steps = [
    'Learn Javasvtipt',
    'Learn React',
    'Make Money',
    'Buy a house'
];

class List2 extends Component {
    render() {
        return (
            <div>
                {/* 第一個參數 單個物件
                第二個參數 index 
                第三個參數 steps本身 */}
                {steps.map((text, idx, array) => 
                        <Item text={text} price={idx+1}/> 
                )}
            </div>
        );
    }
}

export default List2;