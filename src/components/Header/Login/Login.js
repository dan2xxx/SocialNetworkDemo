import React from 'react'
import { connect } from 'react-redux'
import classes from './../../Header/Header.module.css'
import {isLogingThunkCreator} from './../../../redux/login-reducer'
import { NavLink } from 'react-router-dom'
import LoaderProcess from './../../../components/LoaderProcess/LoaderProcess'



const Login = (props) => {

    
    const login = <NavLink to='/login'><div>Login</div></NavLink>
    
    return (
        <div className={classes.loginForm}>
        
        {props.isFetching ? <LoaderProcess className={classes.loading}/> : props.email? props.email : login}  
            
        </div>
        )
}


class LoginAPIContainer extends React.Component {


    componentDidMount () {
        this.props.isLogingThunk()
    }




    render () {

        

        
        return (
            <Login email={this.props.email} isFetching={this.props.isFetching}/>
        )
    }
}



const mapStateToProps = (state) => {
    
    return ({
    id : state.loginForm.id,
    email : state.loginForm.email,
    login : state.loginForm.login,
    isFetching : state.loginForm.isFetching 
    })
}

const LoginContainer = connect (mapStateToProps, {
    isLogingThunk: isLogingThunkCreator
})(LoginAPIContainer)

export default LoginContainer