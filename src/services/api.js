
import axios from "axios";

export const key = "231f9a433d2facd60b509d09d2f6dfc66e964fae"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;