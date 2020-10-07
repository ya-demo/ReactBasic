import React, { useEffect, useRef } from 'react';

const UserefDemo = () => {
    //大多數時候 ref需要是同一個物件
    //createRef 會在每一次Render重新建立新物件
    //只會在第一次呼叫時 建立一個Ref物件 之後都會用同一個物件回傳
    const ref = useRef()
    useEffect(()=>{
        ref.current.focus();
    }, [])
    return <input ref={ref}/>;
}

export default UserefDemo;