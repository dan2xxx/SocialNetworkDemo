import { connect } from 'react-redux'
import { followAccess, unFollowAccess, searchUserThunkCreator, cleanUserList, nextPage } from './../../redux/user-reducer'
import { compose } from 'redux'
import { getFollowInProgress, getIsFetching, getUserSuperSelector } from '../../redux/user-selectors'
import Container from './CreateContainer'

const mapStateToProps = (state) => {
  return ({
    userData: getUserSuperSelector(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state),
    searchTag: state.userData.searchTag
  }

  )
}

export default compose(
  connect(mapStateToProps, {
    getUsers: searchUserThunkCreator,
    startFollow: followAccess,
    stopFollow: unFollowAccess,
    cleanUserList,
    nextPage
  })
)(Container)
