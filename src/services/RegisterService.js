import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    postContact(registers){
        return apiClient.post('/comments',registers)
    },
    getProfile(Findusername) {
        return apiClient.get('/comments', { username: Findusername })
    },
}
