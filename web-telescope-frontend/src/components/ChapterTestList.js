import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from '../assets/right-arrow-icon.svg';

function ChapterTestList(props) {
    const [isVisible, setVisible] = useState(false);

    const toggleClass = () => {
      setVisible(!isVisible);
    };

    return (
        <div className="Chapter">
            <Link to={"/test?id="+props.data.id+"&dzial="+props.sectionid}>
            <div className="chapter-button">
                <img className="chapter-arrow" src={arrow} alt="arrow" /> <h4 className="chapter-title">{props.data.title}</h4>
            </div>
            </Link>
        </div>
    );
  }
  
  export default ChapterTestList;