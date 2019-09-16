import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return(
    <header>
      { // check if there is user data stored in the cookies, and offer the right links
        sessionStorage.user ?
          <div><Link to="/logout">Log out</Link></div>
        :
          <div><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></div>
      }
    </header>
  )
}

export default Header;