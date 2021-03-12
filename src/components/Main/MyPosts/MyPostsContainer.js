import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from './../../../redux/profile-reducer'

import MyPosts from './MyPosts';


// const MyPostsContainer = (props) => {



//     const addPost = () => {
//         props.dispatch(addPostActionCreator())
//     }

//     const postChange = (e) => {
//         props.dispatch(updatePostInputActionCreator(e.target.value))
//     }


//     return (
//         <div >
//             <MyPosts
//                 addPost={addPost}
//                 postChange={postChange}
//                 userData={props.state.userData}
//                 profilePage={props.state.profilePage} />

//         </div>
//     )
// }

const mapStateToProps = (state) => {
    return { 
        userData: state.userData,
        profilePage: state.profilePage
    }
}




const MyPostsContainer = connect(mapStateToProps, {addPost: addPostActionCreator})(MyPosts)



export default MyPostsContainer;