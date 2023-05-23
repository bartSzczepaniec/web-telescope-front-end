import SectionMenuButton from "../components/SectionMenuButton";
import StandardHeader from "../components/StandardHeader";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"

function LearnMenu() {
    return (
      <div className="Menu">
        <StandardHeader title="UCZ SIĘ" />
        <nav className="Main-nav">
            <div className="nav-col">
                <SectionMenuButton text="DZIAŁ 1" link="/ucz-sie-dzial?id=0" icon={SectionImagePlaceholder} />
            </div>
            <div className="nav-col">
                <SectionMenuButton text="DZIAŁ 2" link="/ucz-sie-dzial?id=1" icon={SectionImagePlaceholder} />
            </div>
            <div className="nav-col">
                <SectionMenuButton text="DZIAŁ 3" link="/ucz-sie-dzial?id=2" icon={SectionImagePlaceholder} />
            </div>
        </nav>
      </div>
    );
  }
  
  export default LearnMenu;