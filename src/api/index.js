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
        url: '/api/user',
        data: {},
        method: 'get',
        headers: {
            Authorization: localStorage.getItem('Authorization'),
        },
    })
}

//修改使用者名稱
const updateUserName = () => {
    return helper({
        url: '/api/users',
        data: {},
        method: 'put',
        headers: {
            Authorization: localStorage.getItem('Authorization'),
        },
    })
}

//取得使用者名稱
const getUserName = () => {
    return helper({
        url: '/api/users',
        data: {},
        method: 'get',
        headers: {
            Authorization: localStorage.getItem('Authorization'),
        },
    })
}

//上傳使用者圖片
const uploadUserImage = () => {
    return helper({
        url: '/api/users/uploadBase64Picture',
        data: {},
        method: 'post',
        headers: {
            Authorization: localStorage.getItem('Authorization'),
        },
    })
}

export {
    doLogin,
    doRegister,
    doAuth,
    updateUserName,
    getUserName,
    uploadUserImage,
}
