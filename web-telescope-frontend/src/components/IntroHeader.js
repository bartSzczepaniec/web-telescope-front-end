import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function IntroHeader() {
    return (
        <header className="Intro-header">
            <Link to="/menu"><img src={logo} alt="Logo of website" /></Link>
            <h2>Aplikacja do nauki astronomii</h2>
            <hr className="horizontal-spacer"></hr>
        </header>
    );
  }
  
  export default IntroHeader;