import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from '../assets/right-arrow-icon.svg';

function ChapterList(props) {
    const [isVisible, setVisible] = useState(false);

    const toggleClass = () => {
      setVisible(!isVisible);
    };

    return (
        <div className="Chapter">
            <div className="chapter-button" onClick={toggleClass}>
                <img className="chapter-arrow" src={arrow} alt="arrow" /> <h4 className="chapter-title">{props.data.title}</h4>
            </div>
            <div className={isVisible ? "topics show": "topics"}>
            {props.data.topics.map(topic =>
            <div className="topic">
                <Link to={"/temat?id="+topic.id+"&dzial="+props.section}>
                     <img className="topic-arrow" src={arrow} alt="arrow" /> <h5 className="topic-title">{topic.title}</h5>
                 </Link>
            </div>
            )}
            </div>
        </div>
    );
  }
  
  export default ChapterList;