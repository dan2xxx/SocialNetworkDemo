import React from 'react';
import LoaderProcess from '../../LoaderProcess/LoaderProcess';
import classes from './ProfileInfo.module.css';
import noavatar from './../../../images/noavatar.png'
import StatusInfoContainer from './StatusInfo/StatusInfo'
import changePhotoLogo from './../../../images/upload_photo.png'
import AboutMeContainer from './AboutMe/AboutMe';



const ProfileInfo = (props) => {

    //const userData = props.userData.userList
    //console.log(props.profile)
    //debugger

    // if (props.myId == null) {
    //     return <Redirect to={'/login'} />
    // } 
   

    const onPhotoUploaded = (e) => {

        console.log(e.target.files[0])

        props.setPhoto(e.target.files[0])

    }

    const changeAvatarButtonGen = () => {
        return (
            <div className={classes.inputWrapper}>
                <input name="avatarUpload" type="file" id="input__file" className={classes.inputFile} onChange={onPhotoUploaded}></input>
                <label htmlFor="input__file" className={classes.inputFileButton}>
                <span className={classes.inputFileIconWrapper}><img className={classes.input__file_icon} src={changePhotoLogo} alt="Select photo" width="25" /></span>
                <span className={classes.inputFileButtonText}>Change photo</span>
                </label>
            </div>
            
            
        )
    }


    const chgFollow = () => {
        //debugger
        props.chgFollow(props.profile.userId, props.isFollow)
    }

    

    if (!props.profile) {
        return <LoaderProcess />
    } else
        return (
            <div>
                <img className={classes.banner} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Space_banner.jpg' />
                <div className={classes.descriptionBlock}>
                    {props.myId == props.profile.userId ? changeAvatarButtonGen() : null}
                    <img className={classes.homeAvatar} src={props.profile.photos.large ? props.profile.photos.large : noavatar} />
                                      
                    <h1>{props.profile.fullName}</h1>
                    
                    {props.myId === props.profile.userId ? null :
                        <button onClick={chgFollow} className={classes.button}>{props.isFollow ? 'Unfollow' : 'Follow'}</button>
                    }
                    
                                        
                    <StatusInfoContainer />
                    <AboutMeContainer />

                   

                </div> 
            </div>

        )
}

export default ProfileInfo;