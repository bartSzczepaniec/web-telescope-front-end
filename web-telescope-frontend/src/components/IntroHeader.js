import logo from '../assets/logo.svg';

function IntroHeader() {
    return (
        <header className="Intro-header">
            <img src={logo} alt="Logo of website" />
            <h2>Aplikacja do nauki astronomii</h2>
            <hr className="horizontal-spacer"></hr>
        </header>
    );
  }
  
  export default IntroHeader;