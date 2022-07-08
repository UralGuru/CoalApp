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
    getProfile(userId)  {
        console.warn("Obsolete method. Please, use profileAPI object.")
        return profileAPI.getProfile(userId);
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
};

export const profileAPI = {
    getProfile(userId)  {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId)  {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    }

};
export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe=false) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
    logout(email, password, rememberMe=false) {
        return instance.delete('auth/login');
    },
};

