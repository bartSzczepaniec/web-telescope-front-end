import SmallHeader from "../components/SmallHeader";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function registerHandle(data) {
  return fetch('http://127.0.0.1:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
 }

function Register() {
  const [login, setLogin] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordr, setPasswordr] = useState()
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    if(password == passwordr) {
      const token = await registerHandle({
        "username":login,
        "password":password,
        "email":email
      });
      navigate("/zaloguj-sie");
    }
    else {
      alert("hasła nie są takie same")
    }
  }

    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zarejestruj się</h4>
          <hr className="form-spacer"></hr>
          <form onSubmit={handleRegister}>
            <label htmlFor="login">Podaj login</label>
            <input type="text" id="login" name="login" onChange={e => setLogin(e.target.value)} placeholder="Login..." className="form-input" />
            <label htmlFor="email">Podaj e-mail</label>
            <input type="text" id="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="E-mail..." className="form-input" />
            <label htmlFor="pass">Podaj hasło</label>
            <input type="password" id="pass" name="pass" onChange={e => setPassword(e.target.value)} placeholder="Hasło..." className="form-input" />
            <label htmlFor="passr">Powtórz hasło</label>
            <input type="password" id="passr" name="passr" onChange={e => setPasswordr(e.target.value)} placeholder="Hasło..." className="form-input" />
            <input type="submit" value="Zarejestruj się" className="form-submit" />
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;