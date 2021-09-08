import axios from 'axios'

/**
 * 預期功能
 * 1. url, headers, data, method能當作參數帶入(done)
 * 2. 錯誤能直接返回提示的component
 */

const outerUrl = 'https://l8-upgrade-apis.vercel.app'

const helper = ({ url = '', headers = {}, data = {}, method = 'get' }) => {
    return axios({
        url: outerUrl + url,
        method: method,
        data: data,
        headers: { ...headers },
    })
        .then((res) => {
            return res
        })
        .catch((error) => {
            return error.response
        })
}

export default helper
