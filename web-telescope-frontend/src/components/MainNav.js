import MainMenuButton from "./MainMenuButton";
import ProfilIcon from "../assets/profil-icon.svg";
import LearnIcon from "../assets/learn-icon.svg";
import TestIcon from "../assets/test-icon.svg"
function MainNav() {
    return (
        <nav className="Main-nav">
            <div className="nav-col">
                <MainMenuButton text="Profil użytkownika" link="/zaloguj-sie" icon={ProfilIcon} />
            </div>
            <div className="nav-col">
                <MainMenuButton text="Ucz się" link="/zaloguj-sie" icon={LearnIcon} />
            </div>
            <div className="nav-col">
                <MainMenuButton text="Sprawdź swoją wiedzę" link="/zaloguj-sie" icon={TestIcon} />
            </div>
        </nav>
    );
  }
  
  export default MainNav;