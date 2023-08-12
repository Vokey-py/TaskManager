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
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
}

export const authAPI = {
    checkAuthMe() {
        return instance.get(`auth/me`)
    },
}
