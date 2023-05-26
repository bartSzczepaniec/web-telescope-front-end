import { Link, json } from "react-router-dom";
import SmallHeader from "../components/SmallHeader";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function loginHandle(data) {
  return fetch('http://127.0.0.1:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
 }

 async function setUserId(userId) {
  sessionStorage.setItem('userid', JSON.stringify(userId))
 }

function Login() {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    const token = await loginHandle({
      "username":login,
      "password":password
    });

    if(typeof JSON.stringify(token.user_id) !== 'undefined') {
      await setUserId(token.user_id)
      navigate("/menu");
    } 
  }

  useEffect(() => {
    const tokenString = sessionStorage.getItem('userid');
    if(tokenString && typeof tokenString != 'undefined' && tokenString !== null) {
      navigate("/menu");
    }
  }, [])

    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zaloguj się</h4>
          <hr className="form-spacer"></hr>
          <form onSubmit={handleLogin}>
            <label htmlFor="login">Podaj login</label>
            <input type="text" id="login" name="login" onChange={e => setLogin(e.target.value)} placeholder="Login..." className="form-input" />
            <label htmlFor="pass">Podaj hasło</label>
            <input type="password" id="pass" name="pass" onChange={e => setPassword(e.target.value)} placeholder="Hasło..." className="form-input" />
            <input type="submit" value="Zaloguj się" className="form-submit" />
            <Link to='/zarejestruj-sie'><span className="register-link">Nie masz konta? Zarejestruj się</span></Link>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;