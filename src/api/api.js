import axios from "axios"
import { getCaptchaThunkCreator } from "../redux/login-reducer"


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "805dff35-f412-4845-a1e8-d4f00ad38df3" }
})



export const usersAPI = {

    logIn (data) {
        return (
            instance.post('auth/login', {...data})
        )
    },

    logOut () {
        return (
            instance.delete('auth/login')
        )
    },


    setStatus (statusText) {
        return (
            instance.put('profile/status', {status: statusText})
        )
    },


    getStatus (id) {
        
        return (
            instance.get('profile/status/' + id)
        
        )
    },


    getUsers(currentPage) {
        console.log('API:', currentPage)
        return (
            instance.get("users?count=10&page=" + currentPage).then(
                (result) => { return result.data }
            )
        )

    },

    getFriends(currentPage) {
        console.log('API:', currentPage)
        return (
            instance.get("users?friend=true&count=10&page=" + currentPage).then(
                (result) => { return result.data }
            )
        )

    },



    startFollow(id) {
        return (
            instance.post('follow/' + id, {})

        )
    },


    stopFollow(id) {
        return (

            instance.delete('follow/' + id)
        )
    },

    isLogin() {
        return (
            instance.get('auth/me')
        )

    },

    setProfileAPI(userId) {
        return (
            instance.get('profile/' + userId)
        )
    },


    setUserAvatar(file) {
        console.log(file)
        let formData = new FormData();
        formData.append('image', file)

        return (
            instance.put('/profile/photo', formData, {headers: {
                'Content-Type': 'multipart/form-data'
              }})
                
        )
    },

    postProfileData(profile) {
        return (
            instance.put('profile/', {...profile})
        )
    },

    getCaptcha () {
        return (
            instance.get('security/get-captcha-url')
        )
    },

    findUser(userName, currentPage = 1) {
        console.log("users?term="+userName)
        return (
            instance.get("users?term="+userName+"&page="+currentPage).then(
                (result) => { return result.data }
                
            )
        )

    },

    getFollow(userId) {
        return (
            instance.get('follow/' + userId).then(
                (result) => {return result.data}
                
            )
        )
    }



}
