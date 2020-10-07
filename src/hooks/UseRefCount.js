import React, { useState, useRef } from 'react';

const UseRefCount = () => {
    const [count, setCount] = useState(0)
    const ref = useRef({})
    const start = () =>{
        ref.current = setInterval(()=>setCount(c=>c+1), 100);
    }
    const stop = () =>{
        clearInterval(ref.current)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>  
    );
}

export default UseRefCount;