import { createSelector } from 'reselect'

export const getUserData = (state) => {
  return (state.userData)
}

export const getIsFetching = (state) => {
  return (state.userData.isFetching)
}

export const getFollowInProgress = (state) => {
  return (state.userData.followInProgress)
}

export const getUserSuperSelector = createSelector(getUserData, (state) => {
  console.log('selector')
  return state
}
)
