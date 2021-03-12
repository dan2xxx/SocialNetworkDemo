
import { isLogingThunkCreator } from './login-reducer'


let initialState = {
    isInitialized: false
}




const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET-INIT':

            return ({
                ...state,
                isInitialized: true

            })

       
        default:
            return state

    }

}


export const setInit = () => ({type: 'SET-INIT'})


export const makeInitialization = () => {

    return (dispatch) => {
        let promise = dispatch(isLogingThunkCreator())
        console.log(promise)
        Promise.all([promise])
            .then(() => dispatch(setInit()))
    }

}



export default appReducer