import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { SizeContext } from "../App";

function StandardHeader(props) {

    const [user, setUser] = useState(sessionStorage.getItem('userid'))
    const {size, setSize} = useContext(SizeContext)

    const logout = () => {
        sessionStorage.removeItem("userid")
        window.location.reload()
      }

    return (
        <header className="Standard-header">
            <div className="top-header">
                <a className="smallA" onClick={() => {setSize("resizersmall"); sessionStorage.setItem('size', JSON.stringify("resizersmall"))} }>A</a>
                <a className="mediumA" onClick={() => {setSize("resizermedium"); sessionStorage.setItem('size', JSON.stringify("resizermedium"))}}>A</a>
                <a className="bigA" onClick={() => {setSize("resizerbig"); sessionStorage.setItem('size', JSON.stringify("resizerbig"))}}>A</a>
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