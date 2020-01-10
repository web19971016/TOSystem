import axios from './http'

function login() {
    return axios.post('/login')
}
function validPhone(phone) {
    return axios.post('/validPhone',{
        phone
    })
}
function register(data = {}) {
    return axios.post('register',data)
}
export default{
    login,
    validPhone,
    register
}