import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from '../assets/right-arrow-icon.svg';

function ChapterList() {
    const [isVisible, setVisible] = useState(false);

    const toggleClass = () => {
      setVisible(!isVisible);
    };

    return (
        <div className="Chapter">
            <div className="chapter-button" onClick={toggleClass}>
                <img className="chapter-arrow" src={arrow} alt="arrow" /> <h4 className="chapter-title">Rozdzial</h4>
            </div>
            <div className={isVisible ? "topics show": "topics"}>
            <div className="topic">
                <Link to="/temat?id=0">
                    <img className="topic-arrow" src={arrow} alt="arrow" /> <h5 className="topic-title">Temat</h5>
                </Link>
            </div>
            <div className="topic">
                <Link to="/temat?id=0">
                    <img className="topic-arrow" src={arrow} alt="arrow" /> <h5 className="topic-title">Temat</h5>
                </Link>
            </div>
            </div>
        </div>
    );
  }
  
  export default ChapterList;