import React from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import NavBarContainer from './components/Navbar/Navbar';
import { makeInitialization } from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoaderProcess from './components/LoaderProcess/LoaderProcess';
import withSuspense from './../src/hoc/withSuspense'
import SettingsContainer from './components/Settings/Settings';




const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Friends/UsersContainer'));
const LoginPageContainer = React.lazy(() => import('./components/Header/Login/LoginPage'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const SearchUserContainer = React.lazy(() => import('./components/Friends/SearchUserContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.makeInitialization()
  }


  render() {

    console.log(this.props.isInit)

    return (
      <>

        {!this.props.isInit ? <LoaderProcess /> :

          <HashRouter>
            <div className='app-wrapper'>
              <Header />
              <NavBarContainer />


              <div className='app-wrapper-content'>
                <Switch>
                <Route path='/' exact><Redirect to={'/profile/' + this.props.myId}/></Route>
                <Route path='/profile' exact><Redirect to={'/profile/' + this.props.myId}/></Route>
                <Route path='/news' render={() => <h2>Coming soon...</h2>} />
                
                <Route path='/search' render={withSuspense(SearchUserContainer)} />
                <Route path='/friends' render={withSuspense(FriendsContainer)} />
                <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                <Route path='/users' render={withSuspense(UsersContainer)} />
                
                <Route path='/profile/:userId?' render={() => <Main />} />
                <Route path='/login' render={withSuspense(LoginPageContainer)}/>
                <Route path='/settings' render={withSuspense(SettingsContainer)} />
                <Route path='*' render={() => <h2>404 NOT FOUND</h2>} />
                </Switch>
                
              </div>


            </div>
          </HashRouter>

        }



      </>
    )


  }
}

const mapStateToProps = (state) => {
  return ({
    isInit: state.app.isInitialized,
    myId: state.loginForm.id
  })
}

const AppWrapper = compose(
  connect(mapStateToProps, { makeInitialization }),

)(App)




export default AppWrapper;


