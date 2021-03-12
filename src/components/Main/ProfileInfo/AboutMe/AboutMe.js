import React from 'react';
import { connect } from 'react-redux';
import classes from './AboutMe.module.css';


const AboutMe = (props) => {

    

    const contactListMaker = () => {
        const inputList = props.profile.contacts

        const outputListArr = Object.entries(inputList)
        
        const outPutListElements = outputListArr.map((element) => {
            return element[1] ? <div key={element[0]} className={classes.contactsElement}><a href={'https://' + element[1]}>{element[0]}</a></div> : null
        })

        console.log(inputList)
        return outPutListElements
        
    }



    return (
        <div>
            <div>
                <h3>About me:</h3> 
                {props.profile.aboutMe}
            </div>

            <div>Career status: {props.profile.lookingForAJob ? 'Looking for a job' : 'Have a job'}</div>
        
            <div>{props.profile.lookingForAJob ? 'Description: ' + props.profile.lookingForAJobDescription : null}</div>

            <div>
                <h3>Contacts: </h3>
                {contactListMaker()}
            </div>
        </div>
    )
}




const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile
        })
}


const AboutMeContainer = connect(mapStateToProps,{})(AboutMe)








export default AboutMeContainer