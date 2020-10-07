import React, { useState } from 'react';
import { Provider } from './context';
import UseContextOpenButton from './UseContextOpenButton';

const UseContextOpen = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    const contextValue = {
        open, toggle
    }
    return (
        <Provider value={contextValue}>
            <div>
                <UseContextOpenButton />
                {open && <div>Some Context</div>}
            </div>
        </Provider>
    );

}

export default UseContextOpen;