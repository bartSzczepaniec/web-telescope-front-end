import { Link } from "react-router-dom";
function MainMenuButton(props) {
    return (
        <Link to={props.link}>
            <button className='main-menu-button'>
                {props.text}<br/>
                <div className='button-image-container'><img src={props.icon} alt={props.text + ' '}/></div>
            </button>
        </Link>
    );
  }
  
  export default MainMenuButton;