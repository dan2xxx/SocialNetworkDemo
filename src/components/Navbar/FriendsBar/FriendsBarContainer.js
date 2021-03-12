import React, { useRef } from 'react';
import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';


const mapStateToProps = (state) => {
    return { 
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}



const FriendsBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBar)



export default FriendsBarContainer;