import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToPropsRedirect = (state) => {
    return ({
        myId: state.loginForm.id
    })
}




const withAuthRedirect = (Component) => {

    //debugger
    const RedirectComponent = (props) => {

        if (props.myId == null) {
            return <Redirect to={'/login'} />
        } 
       
        return (
            <Component {...props} />
            
        )
    }

    
    let ConnectedWithAutRedirect = connect(mapStateToPropsRedirect,{})(RedirectComponent)
    return ConnectedWithAutRedirect
    
}


export default withAuthRedirect

