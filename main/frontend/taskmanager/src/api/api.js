import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "874864b2-aa43-4e18-b59e-030f29620a7f"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatusUserProfile(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    putStatusUserProfile(status) {
        return instance.put(`/profile/status/`, {status: status})
    }
}

export const authAPI = {
    checkAuthMe() {
        return instance.get(`auth/me`)
    },
    loginAuth(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logoutAuth() {
        return instance.delete(`auth/login`)
    },
}
