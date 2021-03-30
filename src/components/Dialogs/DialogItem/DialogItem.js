import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './../Dialogs.module.css'

const DialogItem = (props) => {
  const imgSrc = props.userData.avatarUrl

  return (
        <div className={classes.dialog}>

            <img className={classes.smallAvatar} src={imgSrc} />
            <NavLink activeClassName={classes.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
  )
}

export default DialogItem
