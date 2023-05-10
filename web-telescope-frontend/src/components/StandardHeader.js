import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function StandardHeader(props) {
    return (
        <header className="Standard-header">
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