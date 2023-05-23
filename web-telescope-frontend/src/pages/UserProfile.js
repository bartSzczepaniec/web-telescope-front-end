import { Link } from "react-router-dom";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import StandardHeader from "../components/StandardHeader";
import arrow from '../assets/right-arrow-icon.svg';

function UserProfile() {
    return (
      <div className="User-profile">
        <StandardHeader />
        <div className="wide-content-container">
            <div className="wide-content">
                <h3 className="content-header">PROFIL UŻYTKOWNIKA</h3>
                <div className="main-content">
                    <div className="profile-col-l">
                        <div className="profile-col-content">
                        <h4>Dane użytkownika</h4>
                        Login: User12345678<br/>
                        Email: user12345678@gmail.com<br/>
                        </div>
                    </div>
                    <div className="profile-col-r">
                        <div className="profile-col-content">
                        <h4>Poziom użytkownika</h4>
                        <h5>Poziom doświadczenia: 7</h5>
                        <h5>Procent zdobytego doświadczenia do kolejnego poziomu: 95%</h5>
                        </div>
                    </div>
                    <div className="profile-col-l">
                        <div className="profile-col-content">
                        <h4>Wyniki testów</h4>
                        <div className="scores">
                            Wynik testu "1" = <span className="good-score">74%</span><br/>
                            Wynik testu "1" = <span className="medium-score">54%</span><br/>
                            Wynik testu "1" = <span className="bad-score">34%</span><br/>
                            Wynik testu "1" = <span>74%</span><br/>
                            Wynik testu "1" = <span>74%</span><br/>
                            Wynik testu "1" = <span>74%</span><br/>
                        </div>
                        </div>
                    </div>
                    <div className="profile-col-r liked-topics">
                        <div className="profile-col-content">
                        <h4>Polubione tematy</h4>
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
                    <div className="profile-menu-link">
                        <Link to="/menu">Wróć do menu głównego ›</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default UserProfile;