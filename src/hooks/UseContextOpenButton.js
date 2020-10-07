import React, { useContext} from 'react';
import { Consumer } from './context'
import context from './context'

const UseContextOpenButton =  () => {
    const {open, toggle} = useContext(context)
    return <button onClick={toggle}>{open ? 'Close' : 'Open'}</button>
}

export default UseContextOpenButton;