import { usersAPI } from './../api/api'


let initialState = {
    id: null,
    email: null,
    login: null,

    isFetching: false,
    isFetched: false ,
    
    loginInProgress: false,

    errorLog: null,

    captchaUrl: null


}




const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET-USER-DATA':

            return ({
                ...state,
                ...action.data

            })

        case 'SET-ISFETCHING':

            return ({
                ...state,
                isFetching: action.isFetching
            })

        case 'SET-ISFETCHED' :
            
            return ({
                ...state,
                isFetched: action.isFetched
            })

        case 'LOG-OUT': 
            console.log('log out reducer')
            return initialState
            
        case 'LOG-IN': 
            console.log('log in reducer')
            return ({
                ...state,
                loginInProgress: action.login
            })

        case 'SET-ERROR':
            return ({
                ...state,
                errorLog: action.errorText

            })


        case 'SET-CAPTCHA': 
            return ({
                ...state,
                captchaUrl: action.url
            })

        default:
            return state

    }

}


export const setUserData = (data) => ({ type: 'SET-USER-DATA', data: data })
export const setIsFetching = (isFetching) => ({ type: 'SET-ISFETCHING', isFetching })
export const setIsFetched = (isFetched) => ({type: 'SET-ISFETCHED', isFetched})
export const logOutData = () => ({type: 'LOG-OUT'})
export const loginProcess = (login) => ({type: 'LOG-IN', login})
export const setError = (errorText) => ({type: 'SET-ERROR', errorText})
export const setCaptchaUrl = (url) => ({type: 'SET-CAPTCHA', url})


export const isLogingThunkCreator = () => {

    return (dispatch) => {
        
        dispatch(setIsFetching(true))

        return usersAPI.isLogin().then(
            (response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(response.data.data))
                    dispatch(setIsFetching(false))
                    dispatch(setIsFetched(true))
                } else {
                    dispatch(setIsFetching(false))
                }
                

            }
        )

       
    }

    

}


export const logoutThunkCreator = () => {
    return (dispatch) => {
        usersAPI.logOut().then(
            (response) => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    console.log('Logout successful')
                    dispatch(setIsFetched(false))
                    dispatch(logOutData())
                    }
                
            }
        )
    }

}


export const logInThunkCreator = (data) => {
    return (dispatch) => {
        
        dispatch(loginProcess(true))
        usersAPI.logIn(data).then(
            (response) => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    console.log('success login')
                    dispatch(isLogingThunkCreator())
                    dispatch(loginProcess(false))
                    dispatch(setCaptchaUrl(null))
                    //window.location.reload()
                } else if (response.data.resultCode === 1) {
                    dispatch(setError(response.data.messages))
                    dispatch(loginProcess(false))
                } else if (response.data.resultCode === 10) {
                    dispatch(setError(response.data.messages))
                    dispatch(loginProcess(false))
                    dispatch(getCaptchaThunkCreator())
                }

            }
        )
    }
}

export const getCaptchaThunkCreator = () => {
    return async (dispatch) => {
        const response = await (usersAPI.getCaptcha())
        debugger
        dispatch(setCaptchaUrl(response.data.url))
    }
}


export default loginReducer