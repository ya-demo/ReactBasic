import React, {Component} from 'react'
import Item from './Item'

class List extends Component{
    render(){
        return ( 
            <ol>
                <Item text = "Learn Javascript" price={100}/>
                <Item text = "Learn React" price = "100"/>
                {/* <Item>Children Test</Item> */}
            </ol>
        )
    }
}

export default List