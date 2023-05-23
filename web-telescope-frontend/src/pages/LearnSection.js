import { Link } from "react-router-dom";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import ChapterList from "../components/ChapterList";
import StandardHeader from "../components/StandardHeader";

function LearnSection() {
    return (
      <div className="Learn-section">
        <StandardHeader />
        <div className="wide-content-container">
            <Link to="/menu-ucz-sie">Wróć do wyboru działów ›</Link>
            <div className="wide-content">
                <h3 className="content-header">DZIAŁ 1</h3>
                <div className="content-top-image-container">
                    <img src={SectionImagePlaceholder} alt={'Dzial 1'}/>
                </div>
                <div className="main-content">
                    <ChapterList />
                    <ChapterList />
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default LearnSection;