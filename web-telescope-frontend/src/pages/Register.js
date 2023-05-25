import SmallHeader from "../components/SmallHeader";

function Register() {
    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zarejestruj się</h4>
          <hr className="form-spacer"></hr>
          <form>
            <label for="login">Podaj login</label>
            <input type="text" id="login" name="login" placeholder="Login..." className="form-input" />
            <label for="email">Podaj e-mail</label>
            <input type="text" id="email" name="email" placeholder="E-mail..." className="form-input" />
            <label for="pass">Podaj hasło</label>
            <input type="password" id="pass" name="pass" placeholder="Hasło..." className="form-input" />
            <label for="passr">Powtórz hasło</label>
            <input type="password" id="passr" name="passr" placeholder="Hasło..." className="form-input" />
            <input type="submit" value="Zarejestruj się" className="form-submit" />
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;