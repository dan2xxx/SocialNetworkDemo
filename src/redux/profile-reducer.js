import { usersAPI } from './../api/api'

let initialState = {
  postsData: [
    { id: 0, name: 'React', text: "Hello, it's my first post", likeCount: 12 },
    { id: 0, name: 'React', text: "I'm going to become react developer", likeCount: 20 },
    { id: 2, name: 'Masha', text: "lol", likeCount: 10 }
  ],


  profile: null,
  status: '',
  profileDataUpdateProccess: null,

  isFollow: null


}



const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD-POST':

      if (action.text) {
        let newPost = {
          id: 0,
          name: 'React',
          text: action.text,
          likeCount: 0
        }
        return {
          ...state,
          postsData: [...state.postsData, newPost],
        }
      } else {
        return state
      }






    case 'SET-PROFILE':
      //debugger
      return ({ ...state, profile: action.profile })

    case 'SET-STATUS':
      //console.log('set status')
      return ({
        ...state,
        status: action.status
      })

    case 'SET-PHOTO':


      return ({
        ...state,
        profile: { ...state.profile, photos: action.photos }
      })


    case 'SET-DATA-UP-STATUS': 
      
      return ({
        ...state,
        profileDataUpdateProccess: action.status
      })


    case 'SET-IS-FOLLOW':
      return ({
        ...state,
        isFollow: action.bool
      })



    default:
      return state

  }


}

//my post 
export const addPostActionCreator = (text) => ({ type: 'ADD-POST', text })


//profile info
export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile: profile })
export const setStatus = (status) => ({ type: 'SET-STATUS', status: status })
export const setPhoto = (photos) => ({ type: 'SET-PHOTO', photos })
export const setprofileDataUpdateProccess = (status) => ({type: 'SET-DATA-UP-STATUS', status })
const setIsFollow = (bool) => ({type: 'SET-IS-FOLLOW', bool})
//thunk creators

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {

    dispatch(setProfile(null))

    if (userId) {
      usersAPI.setProfileAPI(userId).then(
        (result) => {
        dispatch(setProfile(result.data))
         
        //
        dispatch(findFollowThunkCreator(userId))
        //

        }
      )
    }


  }
}

export const setStatusThunkCreator = (status) => {
  return async (dispatch) => {
    
    
      const result = await (usersAPI.setStatus(status))
    if (result.data.resultCode === 0) {
      
      console.log('success')
      dispatch(setStatus(status))
    } else {
      console.log(result)
    }
    } 
      

  
}

export const getStatusThunkCreator = (id) => {
  return async (dispatch) => {
    
    const response = await (usersAPI.getStatus(id))
    dispatch(setStatus(response.data))


  }
}

export const setPhotoThunkCreator = (file) => {
  return async (dispatch) => {

    const response = await (usersAPI.setUserAvatar(file))
    console.log(response)
    if (response.data.resultCode === 0) {
      dispatch(setPhoto(response.data.data.photos))
    }


  }
}


export const putProfileDataThunkCreator = (profile) => {
  return async (dispatch) => {

    const response = await (usersAPI.postProfileData(profile)) 
    if (response.data.resultCode === 0) {
      dispatch(setProfile(profile))
      dispatch(setprofileDataUpdateProccess('Profile updated!'))
    } else {
      dispatch(setprofileDataUpdateProccess(response.data.messages[0]))
    }
  }
}


export const findFollowThunkCreator = (userId) => {
  return async (dispatch) => {
      
      const response = await (usersAPI.getFollow(userId))
      dispatch(setIsFollow(response)) 
      
  }
}

export const chgFollow = (id, currentFollowingStatus) => {
  return async (dispatch) => {
    if (currentFollowingStatus === false) {
      const response = await (usersAPI.startFollow(id))
      if (response.data.resultCode === 0) {
        console.log(response)
        dispatch(setIsFollow(true))
      }
    } else {
      const response = await (usersAPI.stopFollow(id))
      if (response.data.resultCode === 0) {
        console.log(response)
        dispatch(setIsFollow(false))
      }
    }

  }
}



export default profileReducer