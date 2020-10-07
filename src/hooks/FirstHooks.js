import React, { useState } from 'react';
const FirstHooks = () => {
    //使用時 useState([放的是預設值])
    //陣列第一個 是目前狀態 第二個為 設定的方法
    const [count, setCount] = useState(0);
    const addCount = () =>{
        //可以直接更改值
        setCount(count+1)
        //可以用涵式 將舊的值當參數 傳過來使用 後面回傳新的參數
        setCount(c => c+1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
        </div>
    );
}
export default FirstHooks;