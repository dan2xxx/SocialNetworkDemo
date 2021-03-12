import React from 'react';
import Users from './Users'
import classes from './User.module.css'
import LoaderProcess from './../../components/LoaderProcess/LoaderProcess'

export default class Container extends React.Component {
    constructor(props) {
        super(props)

        this.moreUsers = this.moreUsers.bind(this)
    }
    
    componentDidMount() {
        this.props.cleanUserList()
        this.moreUsers(1)
       
    }

    moreUsers(currentPage) {
        this.props.getUsers(currentPage, this.props.userData.userList)
    }




    render() {

        

        return (
            
            <div>
                
                
                <Users 
                    userData={this.props.userData}
                    moreUsers={this.moreUsers}
                    chgFollowStatus={this.props.chgFollowStatus}
                    isFetching={this.props.isFetching}
                    followInProgress={this.props.followInProgress}
                    setFollowProgress={this.props.setFollowProgress}
                    startFollow={this.props.startFollow}
                    stopFollow={this.props.stopFollow}
                />

                <div  className={classes.isFetchingGif}>
                {this.props.isFetching ? <LoaderProcess /> : null}
                </div> 
            </div>
            
        )

    }
}
