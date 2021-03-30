import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'
import { useForm } from 'react-hook-form'

const Dialogs = (props) => {
  const userData = props.userData.demoUserList
  const messagesData = props.messagesData
  const dialogsData = props.dialogsData

  const onSubmit = (data, e) => {
    // console.log(data)
    props.onMessageClick(data.Message)
    e.target.reset()
  }

  const { register, handleSubmit, reset, errors } = useForm()

  return (
        <div className={classes.inbox}>
            <div className={classes.dialogs}>
                {dialogsData.map((user) => <DialogItem key={'dId: ' + user.id} name={user.name} id={user.id} userData={userData[user.id]} />)}

            </div>

            <div className={classes.messages}>
                {messagesData.map((dialog, index) => <MessageItem key={'mId: ' + index} text={dialog.text} id={dialog.id} userData={userData[dialog.id]} />)}

                <div className='inputDialogs'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* include validation with required or other standard HTML validation rules */}
                        <input name="Message" placeholder='Enter message: ' ref={register({ required: true, maxLength: 20 })} />
                        <div className={classes.error}>{errors.Message && 'Max length is 20'}    </div>

                        <input type="submit" />

                    </form>

                </div>

            </div>

        </div>
  )
}

export default Dialogs
