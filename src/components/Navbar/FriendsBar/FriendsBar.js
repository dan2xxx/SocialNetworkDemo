import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './../Navbar.module.css'
import userPhoto from './../../../images/user_photo.png'

const FriendsBar = (props) => {
  // console.log(props)
  // debugger
  const userData = props.userData.demoUserList

  return (
      <div >
      <div className={classes.item}><NavLink activeClassName={classes.active} to='/users'>
      <div>Users</div>
      <div>
          <img className={classes.smallAvatar} src={userData[1].avatarUrl ? userData[1].avatarUrl : userPhoto} />
          <img className={classes.smallAvatar} src={userData[2].avatarUrl ? userData[2].avatarUrl : userPhoto} />
          <img className={classes.smallAvatar} src={userData[3].avatarUrl ? userData[3].avatarUrl : userPhoto} />
      </div>
      </NavLink></div>

      </div>
  )
}

export default FriendsBar
