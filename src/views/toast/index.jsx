import { useState, useEffect } from 'react'

let delay = 2
const Toast = props => {
    let { status, msg } = props
    const [show, setShow] = useState(false)
    useEffect(()=>{
        setShow(true)
        let showDialog = setTimeout(()=> setShow(false), delay*1000)
        return () => {
            clearTimeout(showDialog)
        }
    }, [status])
    
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

    return(
        <div className={`fixed z-20 top-3 max-w-md items-center flex p-3 rounded-full border-2 ${show ? 'visible' : 'invisible'}`}>
            <div className={`${matchColor(status)} w-14 h-14 rounded-full`}></div>
            <p className="ml-2">{msg}</p>
        </div>
    )
}

export default Toast;