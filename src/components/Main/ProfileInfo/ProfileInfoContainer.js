import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import {setUserProfileThunkCreator, setPhotoThunkCreator, findFollowThunkCreator, chgFollow} from './../../../redux/profile-reducer';
import { withRouter } from "react-router";
import {setIsFetched} from './../../../redux/login-reducer'
import withAuthRedirect from './../../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ProfileInfoAPIContainer extends React.Component {

    
    
    
    
    componentDidMount () {
        if (this.props.match.params.userId) {

            this.setUser()
           
        }
    }    

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname ) {
            this.setUser ()
        }
        
    }

      
       
    
    
    setUser () {
          
        let userId = this.props.match.params.userId

        //console.log(this.props)
            
        if (!userId && this.props.myId) {
            userId = this.props.myId
        } 

        

   
            if (!userId && this.props.myId) {
                userId = this.props.myId
            } 

            this.props.setUserProfile(userId)


        

    }   
        
        
        

        
   


    render() {
        return (
            <>
            {this.props.isMyProfileFetched ? <ProfileInfo {...this.props} /> : null }
            </>
            )
    }
}

const mapStateToProps = (state) => {
    return { 
        userData: state.userData,
        profile: state.profilePage.profile,
        myId: state.loginForm.id,
        myProfileIdIsFetching: state.loginForm.isFetching,
        isMyProfileFetched: state.loginForm.isFetched,
        isFollow: state.profilePage.isFollow

    }
}


export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
        setUserProfile: setUserProfileThunkCreator, 
        setIsFetched, 
        setPhoto: setPhotoThunkCreator,
        chgFollow: chgFollow
        }),
    withRouter
)(ProfileInfoAPIContainer)


// const ProfileInfoAPIContainerwithAuthRedirect = withAuthRedirect(ProfileInfoAPIContainer)

// const ProfileInfoContainerToRout = connect(mapStateToProps, {setUserProfile: setUserProfileThunkCreator, setIsFetched})(ProfileInfoAPIContainerwithAuthRedirect)

// const ProfileInfoContainer = withRouter(ProfileInfoContainerToRout)




// export default ProfileInfoContainer;