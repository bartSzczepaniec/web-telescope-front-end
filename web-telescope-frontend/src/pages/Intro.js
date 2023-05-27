import IntroHeader from "../components/IntroHeader";
import MenuButtonSmall from "../components/MenuButtonSmall";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SizeContext } from "../App";

function Intro() {
  const [user, setUser] = useState(sessionStorage.getItem('userid'))
  const {size, setSize} = useContext(SizeContext)

  const logout = () => {
      sessionStorage.removeItem("userid")
      window.location.reload()
    }

    return (
      <div className="intro-container"> 
          <div className="top-header">
          <a className="smallA" onClick={() => {setSize("resizersmall"); sessionStorage.setItem('size', JSON.stringify("resizersmall"))} }>A</a>
          <a className="mediumA" onClick={() => {setSize("resizermedium"); sessionStorage.setItem('size', JSON.stringify("resizermedium"))}}>A</a>
          <a className="bigA" onClick={() => {setSize("resizerbig"); sessionStorage.setItem('size', JSON.stringify("resizerbig"))}}>A</a>
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