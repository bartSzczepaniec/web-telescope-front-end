import { Link, json } from "react-router-dom";
import SmallHeader from "../components/SmallHeader";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardHeader from "../components/StandardHeader";
import MenuButtonSmall from "../components/MenuButtonSmall";
import sha512 from 'js-sha512';

async function loginHandle(data) {
  return fetch('http://127.0.0.1:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json()).catch(err => { const mute = err })
 }

 async function setUserId(userId) {
  sessionStorage.setItem('userid', JSON.stringify(userId))
 }

function Login() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({login: "", password: ""})
  const [errorlogin, setErrorlogin] = useState("")
  const [completed, setCompleted] = useState(false)

  const navigate = useNavigate();

  const getErrors = () => {
    let newErrors = {login: "", password: ""}
    if(login === "") {
      newErrors.login = "To pole nie może być puste"
    }
    if(password === "") {
      newErrors.password = "To pole nie może być puste"
    }
    return newErrors
  }

  const validate = () => {
    let validation_correct = true
    if(login === "") {
      validation_correct = false
    }
    if(password === "") {
      validation_correct = false
    }
    return validation_correct
  }

  const handleLogin = async e => {
    e.preventDefault();
      if(validate()){
        setErrors({login: "", password: ""})
        const hashedpass = sha512(password)
        const token = await loginHandle({
          "username":login,
          "password":hashedpass
        });

        if(typeof JSON.stringify(token.user_id) !== 'undefined') {
          await setUserId(token.user_id)
          setCompleted(true)
        }
        else {
          setErrorlogin("Użytkownik o takim loginie i haśle nie istnieje")
        }
  } else {
    const newerrors = getErrors()
    setErrors(newerrors)
    setErrorlogin("")
  }
  }

  useEffect(() => {
    const tokenString = sessionStorage.getItem('userid');
    if(tokenString && typeof tokenString != 'undefined' && tokenString !== null) {
      navigate("/menu");
    }
  }, [])

  useEffect(() => {
    setErrors(errors)
  }, [errors])

  if(!completed){
    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zaloguj się</h4>
          <hr className="form-spacer"></hr>
          <form onSubmit={handleLogin}>
            <label htmlFor="login">Podaj login</label>
            <input type="text" id="login" name="login" onChange={e => setLogin(e.target.value)} placeholder="Login..." className="form-input" />
            {<p className="error">{errors.login}</p>}
            <label htmlFor="pass">Podaj hasło</label>
            <input type="password" id="pass" name="pass" onChange={e => setPassword(e.target.value)} placeholder="Hasło..." className="form-input" />
            {<p className="error">{errors.password}</p>}
            <input type="submit" value="Zaloguj się" className="form-submit" />
            {<p className="error">{errorlogin}</p>}
            <Link to='/zarejestruj-sie'><span className="register-link">Nie masz konta? Zarejestruj się</span></Link>
          </form>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="Login">
        <StandardHeader title="Logowanie powiodło sie!"/>
        <MenuButtonSmall text="Przejdź dalej" link="/menu"/><br/>
      </div>
    );
  }
  }
  
  export default Login;