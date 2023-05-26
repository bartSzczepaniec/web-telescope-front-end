import IntroHeader from "../components/IntroHeader";
import MenuButtonSmall from "../components/MenuButtonSmall";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Intro() {
  const [user, setUser] = useState(sessionStorage.getItem('userid'))

  const logout = () => {
      sessionStorage.removeItem("userid")
      window.location.reload()
    }

    return (
      <div className="intro-container"> 
          <div className="top-header">
              <a className="smallA">A</a><a className="mediumA">A</a><a className="bigA">A</a>
              {user && <a onClick={logout}> | Wyloguj się</a>} {!user &&  <Link to='/zaloguj-sie'> | Zaloguj się </Link>}
          </div>
      <div className="Intro">
        <IntroHeader />
        <MenuButtonSmall text="Zaloguj się" link="/zaloguj-sie"/><br/>
        <MenuButtonSmall text="Kontynuuj bez logowania" link="/menu"/><br/>
      </div>
      </div>
    );
  }
  
  export default Intro;