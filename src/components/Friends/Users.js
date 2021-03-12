import React from 'react'
import UserItem from './UserItem'
import classes from './User.module.css'


const Users = (props) => {
    
      return (

          <div>
              {props.userData.userList.map((user) => <UserItem
                  key={user.id}
                  chgFollowStatus={props.chgFollowStatus}
                  user={user}
                  followInProgress={props.followInProgress}
                  setFollowProgress={props.setFollowProgress} 
                  startFollow={props.startFollow}
                  stopFollow={props.stopFollow}    
                  />)}
              
              
              <div className={classes.center}>
                  {!props.isFetching ?
                      <button
                          onClick={() => {
                              //console.log('Page: ', props.userData.page+1)
                              props.moreUsers(props.userData.page + 1)


                          }}
                          className={classes.moreButton}>
                          more...
                </button>
                      :
                      null
                  }

              </div>
          </div>
        )

    }




export default Users
