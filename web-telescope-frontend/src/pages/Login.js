import { Link } from "react-router-dom";
import SmallHeader from "../components/SmallHeader";

function Login() {
    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zaloguj się</h4>
          <hr className="form-spacer"></hr>
          <form>
            <label for="login">Podaj login</label>
            <input type="text" id="login" name="login" placeholder="Login..." className="form-input" />
            <label for="pass">Podaj hasło</label>
            <input type="password" id="pass" name="pass" placeholder="Hasło..." className="form-input" />
            <input type="submit" value="Zaloguj się" className="form-submit" />
            <Link to='/zarejestruj-sie'><span className="register-link">Nie masz konta? Zarejestruj się</span></Link>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;