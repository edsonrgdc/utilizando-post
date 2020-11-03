import axios from 'axios'

const api = axios.create({
    baseUrl: 'https://api.predic8.de:443/shop',
    timeOut: 3000
})

export default api