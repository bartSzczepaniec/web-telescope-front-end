import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function SmallHeader() {
    return (
        <header className="Small-header">
            <Link to='/menu'><img src={logo} alt="Logo of website" /></Link>
        </header>
    );
  }
  
  export default SmallHeader;