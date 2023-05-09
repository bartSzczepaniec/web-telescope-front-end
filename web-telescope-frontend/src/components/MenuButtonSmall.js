import { Link } from "react-router-dom";
function MenuButtonSmall(props) {
    return (
        <Link to={props.link}><button className='menu-small-button'>{props.text}</button></Link>
    );
  }
  
  export default MenuButtonSmall;