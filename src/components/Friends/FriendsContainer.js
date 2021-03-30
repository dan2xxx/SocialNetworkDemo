import { connect } from 'react-redux'
import { followAccess, unFollowAccess, moreFriendsThunkCreator, cleanUserList, nextPage } from './../../redux/user-reducer'
import { compose } from 'redux'
import { getFollowInProgress, getIsFetching, getUserSuperSelector } from '../../redux/user-selectors'
import Container from './CreateContainer'
import withAuthRedirect from './../../hoc/withAuthRedirect'
// class FriendsAPIContainer extends React.Component {
//     constructor(props) {
//         super(props)

//         this.moreUsers = this.moreUsers.bind(this)
//     }

//     componentDidMount() {
//         this.props.cleanUserList()
//         this.moreUsers(1)

//     }

//     moreUsers(currentPage) {
//         this.props.getUsers(currentPage, this.props.userData.userList)
//     }

//     render() {

//         return (

//             <div>

//                 <Users
//                     userData={this.props.userData}
//                     moreUsers={this.moreUsers}
//                     chgFollowStatus={this.props.chgFollowStatus}
//                     isFetching={this.props.isFetching}
//                     followInProgress={this.props.followInProgress}
//                     setFollowProgress={this.props.setFollowProgress}
//                     startFollow={this.props.startFollow}
//                     stopFollow={this.props.stopFollow}
//                 />

//                 <div  className={classes.isFetchingGif}>
//                 {this.props.isFetching ? <LoaderProcess /> : null}
//                 </div>
//             </div>

//         )

//     }
// }

const mapStateToProps = (state) => {
  return ({
    userData: getUserSuperSelector(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state)

  }

  )
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getUsers: moreFriendsThunkCreator,
    startFollow: followAccess,
    stopFollow: unFollowAccess,
    cleanUserList,
    nextPage
  })
)(Container)
