import React, { Component } from 'react';
import Items3 from './Items3';


const info = {
    name: 'React Lesson',
    price: 32000,
    videos: 60,
    teacher: 'scars'
}

class Objectsss extends Component {
    render() {
        return (
            <div>
                {
                    //若資料順序重要的話 要包成陣列 
                    //物件 並不會保證順序
                    Object.keys(info).map(key =>{
                        const value = info[key];
                        return (
                            <Items3>{key}:{value}</Items3>
                        )
                    })
                }
            </div>
        );
    }
}

export default Objectsss;