import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './user-reducer'
import loginReducer from './login-reducer'
import appReducer from './app-reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  loginForm: loginReducer,
  messagesPage: dialogReducer,
  profilePage: profileReducer,
  userData: userReducer,
  sideBar: sidebarReducer,
  app: appReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))
)

export default store
