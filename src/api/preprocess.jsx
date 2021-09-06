import axios from 'axios'
import Toast from '../views/toast'

/**
 * 預期功能
 * 1. url, headers, data, method能當作參數帶入(done)
 * 2. 錯誤能直接返回提示的component
 */

const helper = ({url = '', headers = {}, data= {}, method = 'get' }) => {
    return axios({
        url: url,
        method: method,
        data: data,
        headers: {...headers}
    })
    .then(res => {
        return res
    })
    .catch(error => {
        return error.response
    })
}

export default helper