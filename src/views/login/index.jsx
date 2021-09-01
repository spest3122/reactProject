import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
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
                        <label className="block w-10 text-gray-700  text-sm font-bold mr-2" for="username">
                            帳號
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                        <p className="absolute -bottom-6 left-12 text-red-500 text-xs ">請輸入帳號</p>
                    </div>
                    <div className="mb-6 flex items-center relative">
                        <label className="block w-10 text-gray-700 text-sm font-bold mr-2" for="password">
                            密碼
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                        <p className="absolute -bottom-6 left-12 text-red-500 text-xs ">請輸入密碼</p>
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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                            登入
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login