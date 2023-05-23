import { Link } from "react-router-dom";

function SectionMenuButton(props) {
    return (
        <Link to={props.link}>
            <button className='section-menu-button'>
                {props.text}<br/>
                <div className='section-button-image-container'><img src={props.icon} alt={props.text + ' '}/></div>
                Przejdź dalej
            </button>
        </Link>
    );
  }
  
  export default SectionMenuButton;