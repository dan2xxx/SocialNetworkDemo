import React from 'react';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import classes from './Settings.module.css'
import { setUserProfileThunkCreator, putProfileDataThunkCreator, setprofileDataUpdateProccess } from './../../redux/profile-reducer'
import LoaderProcess from '../LoaderProcess/LoaderProcess';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const Settings = (props) => {


    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (e) => {

        //debugger
        const newProfile = {
            ...props.profile,
            aboutMe: e.aboutMe,
            fullName: e.fullName,
            lookingForAJobDescription: e.lookingForAJobDescription,
            lookingForAJob: e.lookingForAJob,
            contacts: {
                ...props.profile.contacts,
                website: e.website,
                facebook: e.facebook,
                twitter: e.twitter,
                instagram: e.instagram,
                github: e.github
            }

        }

        props.putProfileDataThunkCreator(newProfile)
    }

    React.useEffect(() => {
        //debugger
        props.setUserProfileThunkCreator(props.myId)
        props.setprofileDataUpdateProccess(null)

    }, [props.myId])




    return (
        <div>

            {!props.profile ? <LoaderProcess /> :
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Full name' name='fullName' defaultValue={props.profile.fullName} ref={register({ required: true })} ></input>
                    {errors.fullName && <span className={classes.error}>This field is required</span>}

                    <input placeholder='Few words about you...' name='aboutMe' defaultValue={props.profile.aboutMe} ref={register({ required: true })}></input>
                    {errors.aboutMe && <span className={classes.error}>This field is required</span>}

                    <div className={classes.checkBox}>
                        <label htmlFor="jobChecker">Looking for a job?</label>
                        <input id='jobChecker' name='lookingForAJob' defaultChecked={props.profile.lookingForAJob} ref={register} type="checkbox"></input>
                    </div>

                    <input placeholder='Your job describtion' name='lookingForAJobDescription' defaultValue={props.profile.lookingForAJobDescription} ref={register}></input>

                    <input placeholder='website link' name='website' defaultValue={props.profile.contacts.website} ref={register}></input>
                    <input placeholder='facebook link' name='facebook' defaultValue={props.profile.contacts.facebook} ref={register}></input>
                    <input placeholder='twitter link' name='twitter' defaultValue={props.profile.contacts.twitter} ref={register}></input>
                    <input placeholder='instagram link' name='instagram' defaultValue={props.profile.contacts.instagram} ref={register}></input>
                    <input placeholder='github link' name='github' defaultValue={props.profile.contacts.github} ref={register}></input>


                    <input type="submit" />


                </form>


            }

            <div className={classes.form, classes.updateStatus}>{props.profileDataPutStatus}</div>

        </div>
    )
}




const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        myId: state.loginForm.id,
        profileDataPutStatus: state.profilePage.profileDataUpdateProccess
    })
}

const SettingsContainer = compose (
    withAuthRedirect,
    connect(mapStateToProps,{setUserProfileThunkCreator, putProfileDataThunkCreator, setprofileDataUpdateProccess})
)(Settings)








export default SettingsContainer