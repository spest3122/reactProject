import { useEffect, useState, useRef } from 'react'
import './captcha.css'
import recycle from '/image/recycle.png'

/**
 * 數字驗證碼
 */

const enumMode = ['>', '<']

const threeRandomNumber = (mode) => {
    /**
     * 未解問題
     * 1. 重複數字
     */
    let randomNumberAry = []
    let fixedNumber = 99
    for (let i = 0; i < 3; i++) {
        randomNumberAry.push(Math.round(Math.random() * fixedNumber))
    }
    return randomNumberAry
}

const Captcha = (props) => {
    const { endVerify } = props
    const [threeNumber, setThreeNumber] = useState([])
    const [randomMode, setRandomMode] = useState('')
    const [result, setResult] = useState([])
    const captchaRef = useRef(null)
    //刷新驗證碼
    const onRefresh = () => {
        setUpCaptcha()
        setResult([])
    }
    //設置驗證碼
    const setUpCaptcha = () => {
        const randomMode = Math.floor(Math.random() * 2)
        const mode = enumMode[randomMode]
        const randomNumber = threeRandomNumber(mode)
        setThreeNumber(randomNumber)
        setRandomMode(enumMode[randomMode])
    }
    //校驗
    const verifyCode = () => {
        const answer = threeNumber.sort((a, b) => {
            if (randomMode === '>') {
                return b - a
            } else {
                return a - b
            }
        })
        const isMatch = result.every((item, index) => item === answer[index])
        if (isMatch) {
            endVerify(2)
        } else {
            endVerify(1)
            onRefresh()
        }
    }

    useEffect(() => {
        setUpCaptcha()
    }, [])

    useEffect(() => {
        if (result.length >= 3) {
            verifyCode()
        }
    }, [result])

    return (
        <div className="absolute h-full w-full z-index flex justify-center items-center bg-gray-300	">
            <div className="captcha">
                <div className="captchaScreen" ref={captchaRef}>
                    {threeNumber.map((item) => (
                        <div
                            className="numberPlace"
                            style={{ top: (item + 10) * 2, left: item * 2 }}
                            key={item}
                            onClick={() => setResult((prev) => [...prev, item])}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="mt-2 flex items-center justify-end">
                    <p className="flex-1 text-center">
                        {randomMode === '>' ? '請由大到小' : '請由小到大'}
                    </p>
                    <button onClick={onRefresh}>
                        <img className="recycle" src={recycle} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Captcha
