import helper from './preprocess'

//此處提供的僅是給各個頁面提供的api接口

//登入
const doLogin = (data) => {
    return helper({
        url: '/api/login',
        data: data,
        method: 'post',
        headers: {},
    })
}

//註冊
const doRegister = (data) => {
    return helper({
        url: '/api/register',
        data: data,
        method: 'post',
        headers: {},
    })
}

//驗證
const doAuth = () => {
    return helper({
        url: '/api/authentication',
        data: {},
        method: 'get',
        headers: {
            AUTHENTICATION_TOKEN: localStorage.getItem('AUTHENTICATION_TOKEN') || null
        },
    })
}

export {
    doLogin,
    doRegister,
    doAuth
}