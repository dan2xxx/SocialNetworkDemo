import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    const userData = props.userData
    //debugger

    return (

        <div className={classes.item}>
            
            
            <img src={userData.avatarUrl} />
            {props.name}
            <div>{props.text}</div>
    
        </div>


    )
}

export default Post;