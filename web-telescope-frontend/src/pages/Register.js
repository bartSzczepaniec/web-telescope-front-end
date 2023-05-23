import SmallHeader from "../components/SmallHeader";

function Register() {
    return (
      <div className="Login">
        <SmallHeader />
        <div className="form-container">
          <h4 className="form-header">Zarejestruj się</h4>
          <hr className="form-spacer"></hr>
          <form>
            <label for="login">Podaj login</label><br/>
            <input type="text" id="login" name="login" placeholder="Login..." className="form-input" /><br/>
            <label for="email">Podaj e-mail</label><br/>
            <input type="text" id="email" name="email" placeholder="E-mail..." className="form-input" /><br/>
            <label for="pass">Podaj hasło</label><br/>
            <input type="password" id="pass" name="pass" placeholder="Hasło..." className="form-input" /><br/>
            <label for="passr">Powtórz hasło</label><br/>
            <input type="password" id="passr" name="passr" placeholder="Hasło..." className="form-input" /><br/>
            <input type="submit" value="Zarejestruj się" className="form-submit" /><br/>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;