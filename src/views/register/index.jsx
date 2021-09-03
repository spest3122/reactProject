import React from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory();
    const goToLogin = () => {
        history.push('/login')
    }
    return (
        <div className="h-full flex justify-center items-center	">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
                    <div className="flex justify-center text-lg mb-6">
                        <h2>註冊</h2>
                    </div>
                    <div className="mb-7 flex items-center relative">
                        <label className="block w-24 text-gray-700  text-sm font-bold mr-2" for="username">
                            <span className="text-red-500">*</span>
                            帳號
                        </label>
                        <input 
                            className="shadow text-sm appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text"
                            placeholder="必須是信箱"
                        />
                        <p className="absolute -bottom-5 ml-3 left-20 text-red-500 text-xs ">請輸入帳號</p>
                    </div>
                    <div className="mb-6 flex items-center relative">
                        <label className="block w-24 text-gray-700 text-sm font-bold mr-2" for="password">
                            <span className="text-red-500">*</span>
                            密碼
                        </label>
                        <input 
                            className="shadow appearance-none text-sm border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password"
                            placeholder="4-8字元；首尾必須是英文；中間必須是數字"
                        />
                        <p className="absolute ml-3 -bottom-5 left-20 text-red-500 text-xs ">請輸入密碼</p>
                    </div>
                    <div className="mb-6 flex items-center relative">
                        <label className="block w-24 text-gray-700 text-sm font-bold mr-2" for="confirmPassword">
                            <span className="text-red-500">*</span>
                            確認密碼
                        </label>
                        <input 
                            className="shadow text-sm appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="4-8字元；首尾必須是英文；中間必須是數字"
                        />
                        <p className="absolute -bottom-5 left-20 ml-3 text-red-500 text-xs ">請輸入確認密碼</p>
                        <p className="absolute -bottom-10 left-20 ml-3 text-red-500 text-xs ">與密碼不同</p>
                    </div>
                    <div className="flex justify-center mb-4">
                        <button 
                            className="text-blue-300 text-sm py-1 px-6 rounded focus:outline-none focus:shadow-outline" 
                            type="button"
                            onClick={goToLogin}
                        >
                            返回登入
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                            註冊
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register