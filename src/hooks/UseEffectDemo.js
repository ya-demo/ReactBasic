import React, { useState, useEffect } from 'react';

const UseEffectDemo = () =>{

    const [state, setState] = useState({
        email: '',
        picture: '',
    })

    //每次執行時都會執行第一個參數方法 第二個可控制方法內容是否要執行
    //傳空陣列 每次更新都會傳空陣列, 所以只有在第一次呼render時候會執行 等於componentDidMount
    //若沒有傳空陣列 會等於執行componentDidUpdate
    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = () =>{
        fetch('https://randomuser.me/api/')
        .then(rs=>rs.json())
        .then(data=>{
            const [user] = data.results;
            setState({
                email:user.email, 
                picture:user.picture.medium
            })
        })
    }
  
    const {email, picture} = state;
    return (
       <div>
           <img src={picture}/>
           <div>{email}</div>
        </div>
    );

}

export default UseEffectDemo;