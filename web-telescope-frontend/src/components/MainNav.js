import MainMenuButton from "./MainMenuButton";
import ProfilIcon from "../assets/profil-icon.svg";
import LearnIcon from "../assets/learn-icon.svg";
import TestIcon from "../assets/test-icon.svg"
function MainNav() {
    return (
        <nav className="Main-nav">
            <div className="nav-col">
                <MainMenuButton text="Profil użytkownika" link="/profil" icon={ProfilIcon} />
            </div>
            <div className="nav-col">
                <MainMenuButton text="Ucz się" link="/menu-ucz-sie" icon={LearnIcon} />
            </div>
            <div className="nav-col">
                <MainMenuButton text="Sprawdź swoją wiedzę" link="/menu-testy" icon={TestIcon} />
            </div>
        </nav>
    );
  }
  
  export default MainNav;