import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function StandardHeader(props) {

    const [user, setUser] = useState(sessionStorage.getItem('userid'))

    const logout = () => {
        sessionStorage.removeItem("userid")
        window.location.reload()
      }

    return (
        <header className="Standard-header">
            <div className="top-header">
                <a className="smallA">A</a><a className="mediumA">A</a><a className="bigA">A</a>
                {user && <a onClick={logout}> | Wyloguj się</a>} {!user &&  <Link to='/zaloguj-sie'> | Zaloguj się </Link>}
            </div>
            <Link to='/menu'><img src={logo} alt="Logo of website" /></Link>
            {props.title &&
                <h3>
                    {props.title}
                </h3>
            }
        </header>
    );
  }
  
  export default StandardHeader;