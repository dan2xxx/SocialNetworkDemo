import React from 'react'
import { connect } from 'react-redux'
import { setStatusThunkCreator, getStatusThunkCreator } from './../../../../redux/profile-reducer'
import classes from './../ProfileInfo.module.css'

const StatusInfo = (props) => {
  const [state, setState] = React.useState({
    statusEditActivator: false,
    currentStatusInput: ''
  })

  React.useEffect(() => {
    props.getStatusThunkCreator(props.userId)
  }, [props.userId, props.status])

  const statusEditActivate = () => {
    console.log(props)
    if (props.userId === props.myId) {
      setState({
        ...state,
        statusEditActivator: true,
        currentStatusInput: props.status
      })
    }
  }

  const statusEditDeactivate = (e) => {
    console.log('deactivate')
    setState({
      statusEditActivator: false,
      currentStatusInput: ''
    })

    props.setStatusThunkCreator(e.target.value)
  }

  const statusOnChange = (e) => {
    setState({
      ...state,
      currentStatusInput: e.target.value
    })
    console.log(e.target.value)
    console.log(state.currentStatusInput)
  }

  return (
        <div>
            <div className={classes.statusBlock}>
                {!state.statusEditActivator
                  ? <span onDoubleClick={statusEditActivate}>
                    {props.status
                      ? props.status
                      : props.userId === props.myId
                        ? <>How is it going?</>
                        : null}
                </span>
                  : null}
            </div>

            <div>
                {state.statusEditActivator ? <input autoFocus={true} onBlur={statusEditDeactivate} onChange={statusOnChange} value={state.currentStatusInput} /> : null}
            </div>
        </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    userId: state.profilePage.profile.userId,
    myId: state.loginForm.id,
    status: state.profilePage.status
  })
}

const StatusInfoContainer = connect(mapStateToProps, { setStatusThunkCreator, getStatusThunkCreator })(StatusInfo)

export default StatusInfoContainer
