import { connect } from 'react-redux'
import { sendMessageActionCreator } from './../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import withAuthRedirect from './../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    messagesData: state.messagesPage.messagesData,
    dialogsData: state.messagesPage.dialogsData,
    messageInput: state.messagesPage.messageInput,
    myId: state.loginForm.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageClick: (text) => { dispatch(sendMessageActionCreator(text)) }
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
