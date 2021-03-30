import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import FriendsBarContainer from './FriendsBar/FriendsBarContainer'
import { connect } from 'react-redux'
import { setUserProfileThunkCreator } from './../../redux/profile-reducer'
import { logoutThunkCreator } from './../../redux/login-reducer'

const NavBar = (props) => {
  // console.log(props)
  const myProfileUrl = '/profile/' + props.myId

  const MyProfileOnClick = (props) => {
    props.setUserProfile(props.myId)
  }

  const logout = () => {
    props.logout()
  }

  return (
      <div className={classes.nav}>

      <div className={classes.item} onClick={() => MyProfileOnClick(props)}><NavLink activeClassName={classes.active} to={myProfileUrl}>Profile</NavLink></div>
      <div className={classes.item}><NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink></div>
      <div className={classes.item}><NavLink activeClassName={classes.active} to='/friends'>Friends</NavLink></div>
      <div className={classes.item}><NavLink activeClassName={classes.active} to='/news'>News</NavLink></div>
      <div className={classes.item}><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></div>
      <FriendsBarContainer className={classes.item} />
      <div className={classes.item} ><NavLink to='/login' onClick={() => logout()}>Sign Out</NavLink></div>

      </div>

  )
}

const mapStateToProps = (state) => {
  return {
    myId: state.loginForm.id
  }
}

const NavBarContainer = connect(mapStateToProps, { setUserProfile: setUserProfileThunkCreator, logout: logoutThunkCreator })(NavBar)

export default NavBarContainer
