import React, { Component } from 'react';
import Item from './Item';



class KeyObject extends Component {
    state = {
        list: [
            { label:'name', data: 'React Lesson'},
            { label:'price', data: 32000},
            {label:'videos', data: 60},
            { label:'eacher', data:'scars'}
        ]
    }

    removeFirst = () =>{
        this.setState({
            list: this.state.list.slice(1)
        })
    }
    render() {
        return (
            <div>
                {this.state.list.map(
                    ({label, data})=> (
                        //應該item都需要一個key 主要原因是認出ren出來的元件跟哪一筆資料連結
                        //跟效能有關 若使用PureComponent 
                        //1.沒有key 會用前三個元件來更新資料 刪掉最後一個
                        //2.有key 會把第一個刪掉 把後面三個往前擺
                        //key要是unique key 但只要在同一個父層底下是唯一即可
                        <Item key={label} text={`${label}: ${data}`} price={1}/>
                    )
                )}
                <button onClick={this.removeFirst}>-</button>
            </div>
        );
    }
}

export default KeyObject;