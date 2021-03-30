import React from 'react'
import classes from './Header.module.css'
import LoginContainer from './Login/Login'
import SearchContainer from './Search/Search'

const Header = () => {
  const logoUrl = 'https://i.gadgets360cdn.com/large/Oneplus_newlogo_thumb1_1584519552912.jpg'

  return <div className={classes.header} >

      <div className={classes.headerWrapper}>
      <div className={classes.logoWrapper}><img className={classes.logo} src={logoUrl}></img></div>
      <div className={classes.searchWrapper}><SearchContainer /></div>
      <div className={classes.loginWrapper}><LoginContainer /></div>
      </div>

    </div>
}

export default Header
