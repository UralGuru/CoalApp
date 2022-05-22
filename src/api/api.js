import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "86e5cf2e-6e37-4a2b-b392-0666ebb1ea1f",
    }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(respons => {return respons.data})
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(respons => {
                return respons.data})
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(respons => {
                return respons.data
            })
    },
}