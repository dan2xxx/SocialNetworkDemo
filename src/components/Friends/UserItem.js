import React from 'react'
import classes from './UserItem.module.css'
import userPhoto from './../../images/user_photo.png'
import { NavLink } from 'react-router-dom'
import {usersAPI} from './../../api/api'



const UserItem = (props) => {


    //console.log(props)

    const user = props.user
    let button = ''
    let buttonActivator = props.followInProgress.some((id) => id === user.id )
    

    

    if (user.followStatus == false) {
        button = <button onClick={() => props.startFollow(user.id, user)} className={classes.button} disabled={buttonActivator}>Follow</button>
    } else if (user.followStatus == true) {
        button = <button onClick={() => props.stopFollow(user.id, user)} className={classes.button} disabled={buttonActivator}>Unfollow</button>
    }


    // if (user.followStatus == false) {
    //     button = <button onClick={() => props.chgFollowStatus(user.id)} className={classes.button}>Follow</button>
    // } else if (user.followStatus == true) {
    //     button = <button onClick={() => props.chgFollowStatus(user.id)} className={classes.button}>Unfollow</button>
    // }
    
    return (
        
        <>
        <div className={classes.userElement}>
            
            
            <NavLink to={'profile/' + user.id}> <img className={classes.mediumAvatar} src={user.avatarUrl != null ? user.avatarUrl : userPhoto} /></NavLink>
            <div className={classes.userName}><NavLink to={'profile/' + user.id}>{user.name}</NavLink></div>
            <div className={classes.userBio}>{user.bio}</div>
            
            {button}
          
           
            
            
        </div>
         
        </>
        
    )
}

export default UserItem