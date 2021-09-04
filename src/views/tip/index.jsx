import React, { useState, useEffect } from 'react'

let delay = 2
const Toast = props => {
    let { status, msg } = props
    const [show, setShow] = useState(true)
    useEffect(()=>{
        let showDialog = setTimeout(()=> setShow(false), delay*1000)
        return () => {
            clearTimeout(showDialog)
        }
    }, [])
    
    const matchColor = (color) => {
        switch(color) {
            case 'success':
                return 'bg-green-500';
            case 'fail': 
                return 'bg-red-600';
            default:
                return 'bg-blue-100';
        }
    }

    return (show ? 
        (<div className="fixed z-10 top-3 max-w-md flex items-center p-3 rounded-full border-2">
            <div className={`${matchColor(status)} w-14 h-14 rounded-full`}></div>
            <p className="ml-2">{msg}</p>
        </div>)
    : null)
}

export default Toast;