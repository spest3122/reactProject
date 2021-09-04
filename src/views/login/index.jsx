import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Toast from '../tip'
import Captcha from './captcha'

const Login = () => {
    const history = useHistory();
    const [loginForm, setLoginForm] = useState({
        username: '',
        userErrTip: false,
        password: '',
        psdErrTip: false,
    })
    const [toastStatus, setToastStatus] = useState({ msg: '',status: false, color: ''})
    
    // 驗證登入表單
    const verifyLoginForm = () => {
        let userErrTip = false;
        let psdErrTip = false;
        if(loginForm.username === ''){
            userErrTip = true;
        }

        if(loginForm.password === ''){
            psdErrTip = true
        }
        if(!userErrTip && !psdErrTip){
            return false
        }
        setLoginForm(prev => ({...prev, userErrTip: userErrTip, psdErrTip: psdErrTip}))
        return true
    }

    // 提交登入表單
    const doSubmit = async () => {
        if(verifyLoginForm()){
            return;
        }
        let res = await 
            axios.post(
                '/api/login',
                { username: loginForm.username, password: loginForm.password }, 
            )
            .then((res)=>{
                console.log(res, 8888)
            })
            .catch((error) => {
                const { 
                    response: {
                        data
                    }
                } = error
                if(!data.success){
                    setToastStatus(prev => ({
                        ...prev, 
                        msg: data.message, 
                        status: true,
                        color: 'fail'
                    }))
                }
            })
    }

    // 跳轉註冊頁
    const goToRegister = () => {
        history.push('/register')
    }

    return (
        <div className="h-full flex justify-center items-center	">
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
                    <div className="flex justify-center text-lg mb-6">
                        <h2>登入</h2>
                    </div>
                    <div className="mb-7 flex items-center relative">
                        <label className="block w-10 text-gray-700 text-sm font-bold mr-2" for="username">
                            帳號
                        </label>
                        <input 
                            className={`shadow appearance-none border ${loginForm.userErrTip ? 'border-red-500': ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
                            id="username" 
                            type="text"
                            value={loginForm.username}
                            onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value}))}
                        />
                        {loginForm.userErrTip ? (<p className="absolute -bottom-6 left-12 text-red-500 text-xs ">請輸入帳號</p>) : null}
                        
                    </div>
                    <div className="mb-6 flex items-center relative">
                        <label className="block w-10 text-gray-700 text-sm font-bold mr-2" for="password">
                            密碼
                        </label>
                        <input 
                            className={`shadow appearance-none border ${loginForm.psdErrTip ? 'border-red-500': ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
                            id="password" 
                            type="password"
                            value={loginForm.password}
                            onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value}))}
                        />
                        {loginForm.psdErrTip ? (<p className="absolute -bottom-6 left-12 text-red-500 text-xs">請輸入密碼</p>) : null}
                    </div>
                    <div className="flex justify-center mb-4">
                        <button 
                            className="text-blue-300 text-sm py-1 px-6 rounded focus:outline-none focus:shadow-outline" 
                            type="button"
                            onClick={goToRegister}
                        >
                            註冊
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline" 
                            type="button"
                            onClick={doSubmit}
                        >
                            登入
                        </button>
                    </div>
                </form>
            </div>
            {/* {toastStatus.status ? (<Toast status={toastStatus.color} msg={toastStatus.msg} />) : null} */}
            <Captcha />
        </div>
    )
}

export default Login