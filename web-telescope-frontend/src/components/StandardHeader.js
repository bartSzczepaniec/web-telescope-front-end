import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function StandardHeader(props) {
    return (
        <header className="Standard-header">
            <div className="top-header">
                <a className="smallA">A</a><a className="mediumA">A</a><a className="bigA">A</a> | Wyloguj się
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