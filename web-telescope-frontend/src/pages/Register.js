import SmallHeader from "../components/SmallHeader";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardHeader from "../components/StandardHeader";
import MenuButtonSmall from "../components/MenuButtonSmall";

async function registerHandle(data) {
  return fetch('http://127.0.0.1:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => data.status)
 }

function Register() {
  const [login, setLogin] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordr, setPasswordr] = useState("")
  const [completed, setCompleted] = useState(false)
  const [errors, setErrors] = useState({login: "", email: "", password: "", passwordr: ""})
  const [errorlogin, setErrorlogin] = useState("")
  
  const navigate = useNavigate();

  const getErrors = () => {
    let newErrors = {login: "", email: "", password: "", passwordr: ""}

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if(login === "") {
      newErrors.login = "To pole nie może być puste"
    }
    if(email === "") {
      newErrors.email = "To pole nie może być puste"
    }
    else if(!email.match(mailformat)) {
      newErrors.email = "Błędny format e-mailu"
    }
    if(password === "") {
      newErrors.password = "To pole nie może być puste"
    }
    else if(!password.match(passwordformat)) {
      newErrors.password = "Hasło musi mieć między 8, a 20 znaków, przynajmniej jedną dużą literę, jedną małą literę oraz jedną cyfrę"
    }
    if(passwordr === "") {
      newErrors.passwordr = "To pole nie może być puste"
    }
    else if(password != passwordr) {
      newErrors.passwordr = "Hasła muszą się zgadzać"
    }
    return newErrors
  }

  const validate = () => {
    let validation_correct = true

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if(login === "") {
      validation_correct = false
    }
    if(email === "") {
      validation_correct = false
    }
    else if(!email.match(mailformat)) {
      validation_correct = false
    }
    if(password === "") {
      validation_correct = false
    }
    else if(!password.match(passwordformat)) {
      validation_correct = false
    }
    if(passwordr === "") {
      validation_correct = false
    }
    else if(password != passwordr) {
      validation_correct = false
    }

    return validation_correct
  }

  const handleRegister = async e => {
    e.preventDefault();
    if(validate()) {
      setErrors({login: "", email: "", password: "", passwordr: ""})
      const response = await registerHandle({
        "username":login,
        "password":password,
        "email":email
      });
      if(response === 201) {
        setCompleted(true)
      }
      else {
        setErrorlogin("Rejestracja nie powiodła się")
      }
    }
    else {
      const newerrors = getErrors()
      setErrors(newerrors)
      setErrorlogin("")
    }
  }
  if(!completed){
    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zarejestruj się</h4>
          <hr className="form-spacer"></hr>
          <form onSubmit={handleRegister}>
            <label htmlFor="login">Podaj login</label>
            <input type="text" id="login" name="login" onChange={e => setLogin(e.target.value)} placeholder="Login..." className="form-input" />
            {<p className="error">{errors.login}</p>}
            <label htmlFor="email">Podaj e-mail</label>
            <input type="text" id="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="E-mail..." className="form-input" />
            {<p className="error">{errors.email}</p>}
            <label htmlFor="pass">Podaj hasło</label>
            <input type="password" id="pass" name="pass" onChange={e => setPassword(e.target.value)} placeholder="Hasło..." className="form-input" />
            {<p className="error">{errors.password}</p>}
            <label htmlFor="passr">Powtórz hasło</label>
            <input type="password" id="passr" name="passr" onChange={e => setPasswordr(e.target.value)} placeholder="Hasło..." className="form-input" />
            {<p className="error">{errors.passwordr}</p>}
            <input type="submit" value="Zarejestruj się" className="form-submit" />
            {<p className="error">{errorlogin}</p>}
          </form>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="Login">
        <StandardHeader title="Rejestracja powiodła sie!"/>
        <MenuButtonSmall text="Przejdź dalej" link="/zaloguj-sie"/><br/>
      </div>
    );
  }
  }
  
  export default Register;