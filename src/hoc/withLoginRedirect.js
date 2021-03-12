import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToPropsRedirect = (state) => {
    return ({
        myId: state.loginForm.id
    })
}




const withLoginRedirect = (Component) => {

    //debugger
    const RedirectComponent = (props) => {

        if (props.myId) {
            return <Redirect to={'/profile/' + props.myId} />
        } 
       
        return (
            <Component {...props} />
            
        )
    }

    
    let ConnectedWithLoginRedirect = connect(mapStateToPropsRedirect,{})(RedirectComponent)

    return ConnectedWithLoginRedirect
    
}


export default withLoginRedirect

