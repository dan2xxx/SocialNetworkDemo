import React from 'react'
import classes from './../Dialogs.module.css'

const MessageItem = (props) => {
  const imgSrc = props.userData.avatarUrl
  // debugger

  return (
        <div className={classes.message}>
            {/* console.log(props) */}
            <img className={classes.microAvatar} src={imgSrc} />
            {props.text}
        </div>
  )
}

export default MessageItem
