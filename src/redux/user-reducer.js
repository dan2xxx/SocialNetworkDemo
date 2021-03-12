import { usersAPI } from './../api/api'

let initialState = {
 
  demoUserList: [
    {
      id: 0, name: 'Dan2xxX', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwDI9Dpinf2UH6ULsDPHZuVkerZ2B_YYTLA&usqp=CAU', bio: "I'm advanced photoshop user and gonna learn JS and React"
    }
    ,

    {
      id: 1, name: 'Valera', avatarUrl: 'http://vertex-art.ru/wp-content/uploads/historic_.jpg', bio: "i'm Valera and it's about time", followStatus: false
    },
    {
      id: 2, name: 'Masha', avatarUrl: 'https://ae01.alicdn.com/kf/HTB1sIR8e8WD3KVjSZKPq6yp7FXaa/Diy.jpg_Q90.jpg_.webp', bio: "My name is Mary and i'm the most pretty girl", followStatus: true
    },
    {
      id: 3, name: 'Dima', avatarUrl: 'https://jyvopys.com/pictures/image196_0.jpg', bio: "Jude is power", followStatus: false
    }
  ],


  userList: [
    
  ],

  page: 1,
  isFetching: false,
  followInProgress: [],
  searchTag: null


}




const userReducer = (state = initialState, action) => {

  //debugger
  switch (action.type) {
    case 'CHG_FOLLOW':

      let stateCopy = { ...state }
      let searchId = action.id


      let currentUser = stateCopy.userList.find(user => user.id === searchId)

      if (currentUser.followStatus === false) {
        currentUser.followStatus = true
      } else {
        currentUser.followStatus = false
      }



      return stateCopy

    case 'ADD_USERS':
      let userList = state.userList

        userList = [...userList, ...action.userList]
        
        return { ...state, userList: userList }
      

      

    case 'NEXT_PAGE':

           
      return { ...state, page: state.page + 1 }


    case 'SET_ISFETCHING':

      return ({ ...state, isFetching: action.isFetching })


    case 'SET_FOLLOW_PROGRESS':
      return ({
        ...state,
        followInProgress: action.isLoading
          ? [...state.followInProgress, action.id]
          : state.followInProgress.filter(id => id !== action.id)


      })

    case 'CLEAN-USERS': 
      return ({
        ...state,
        userList: [
    
        ],
        page: 1,
      })

    case 'CHG-SEARCH': 
      
      return ({
        ...state,
        searchTag: action.newTag
      })



    default:
      return state
  }

}


export const chgFollowStatus = (userId) => ({ type: 'CHG_FOLLOW', id: userId })
export const setUsers = (userList) => ({ type: 'ADD_USERS', userList })
export const nextPage = (page) => ({ type: 'NEXT_PAGE', page })
export const setIsFetching = (isFetching) => ({ type: 'SET_ISFETCHING', isFetching })
export const setFollowProgress = (id, isLoading) => ({ type: 'SET_FOLLOW_PROGRESS', id, isLoading })
export const cleanUserList = () => ({type: 'CLEAN-USERS'})
export const changeSearchTag = (newTag) => ({type: 'CHG-SEARCH', newTag})

const moreUsersFactory = (result, dispatch, currentPage) => {
     
    let userData = result.items
    let newUsers = []
    userData.map((user) => newUsers.push({ id: user.id, name: user.name, avatarUrl: user.photos.small, bio: '', followStatus: user.followed }))
    dispatch(setUsers(newUsers))
    dispatch(setIsFetching(false))
    console.log('Thunk is completed')
    dispatch(nextPage(currentPage))
}



export const moreUsersThunkCreator = (currentPage) => {
  return async (dispatch) => {

    dispatch(setIsFetching(true))
    const result = await (usersAPI.getUsers(currentPage))
    moreUsersFactory(result, dispatch, currentPage)

  }
}

export const moreFriendsThunkCreator = (currentPage) => {
  return async (dispatch) => {

    dispatch(setIsFetching(true))
    const result = await (usersAPI.getFriends(currentPage))
    moreUsersFactory(result, dispatch, currentPage)

  }
}

export const searchUserThunkCreator = (currentPage) => {
  return async (dispatch, getState) => {

    const userName = getState().userData.searchTag
    
    dispatch(setIsFetching(true))
    const result = await (usersAPI.findUser(userName, currentPage))
    //debugger
    moreUsersFactory(result, dispatch, currentPage)

  }
}





export const followAccess = (id, user) => {
  return async (dispatch) => {
    dispatch(setFollowProgress(id, true))
    const result = await (usersAPI.startFollow(id))

    console.log('async await')
    if (result.data.resultCode === 0) {
      dispatch(chgFollowStatus(user.id))
    }
    dispatch(setFollowProgress(id, false))

  }
}

export const unFollowAccess = (id, user) => {
  return async (dispatch) => {
    dispatch(setFollowProgress(id, true))
    const result = await (usersAPI.stopFollow(id))

    if (result.data.resultCode === 0) {
      dispatch(chgFollowStatus(user.id))
    }
    dispatch(setFollowProgress(id, false))

  }
}


export default userReducer