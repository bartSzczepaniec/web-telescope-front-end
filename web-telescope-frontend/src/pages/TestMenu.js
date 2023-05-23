import StandardHeader from "../components/StandardHeader";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import SectionMenuButton from "../components/SectionMenuButton";

function TestMenu() {
    return (
        <div className="Menu">
          <StandardHeader title="UCZ SIĘ" />
          <nav className="Main-nav">
              <div className="nav-col">
                  <SectionMenuButton text="DZIAŁ 1" link="/testy-dzial?id=0" icon={SectionImagePlaceholder} />
              </div>
              <div className="nav-col">
                  <SectionMenuButton text="DZIAŁ 2" link="/testy-dzial?id=1" icon={SectionImagePlaceholder} />
              </div>
              <div className="nav-col">
                  <SectionMenuButton text="DZIAŁ 3" link="/testy-dzial?id=2" icon={SectionImagePlaceholder} />
              </div>
          </nav>
        </div>
      );
  }
  
  export default TestMenu;