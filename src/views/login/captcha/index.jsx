import React, { useEffect, useState, useRef } from 'react'
import './captcha.css'

/**
 * 數字驗證碼
 * 1. 隨機出三個數字
 * 2. 隨機選定從小點到大或者反過來
 * 3. 數字出現在框框內可供點擊
 */

const enumMode = ['>' , '<']

const threeRandomNumber = (mode) => {
    let randomNumberAry = [];
    let fixedNumber = 99
    for(let i = 0; i < 3;i++){
        randomNumberAry.push(Math.round(Math.random() * fixedNumber))
    }
    return randomNumberAry
}

const Captcha = () => {
    const [threeNumber, setThreeNumber] = useState([])
    const [randomMode, setRandomMode] = useState('')
    const captchaRef = useRef(null)
    const [result, setResult] = useState([])
    useEffect(() => {
        const randomMode = Math.floor(Math.random() * 2);
        const mode = enumMode[randomMode]
        const randomNumber = threeRandomNumber(mode);
        setThreeNumber(randomNumber)
        setRandomMode(enumMode[randomMode])
        return () => {}
    }, [])
    useEffect(() => {
        console.log(result)
        return () => {}
    }, [result])
    
    return (
        <div className="captcha">
            <div className="captchaScreen" ref={captchaRef}>
            {
                threeNumber.map(item => 
                    <div 
                        className="numberPlace" 
                        style={{top: item*2, left: item*2}} 
                        key={item}
                        onClick={()=> setResult(prev => [...prev, item])}
                    >
                        {item}
                    </div>
                )
            }
            </div>
            {randomMode === '>' ? '請由大到小' : '請由小到大'}
            {randomMode}
            {threeNumber}
        </div>
    )
}

export default Captcha