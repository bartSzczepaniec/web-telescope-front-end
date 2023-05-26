import IntroHeader from "../components/IntroHeader";
import MenuButtonSmall from "../components/MenuButtonSmall";

function Intro() {
  const logout = () => {
    alert("Great Shot!");
  }

    return (
      <div className="intro-container"> 
        <div className="top-header">
          <a className="smallA">A</a><a className="mediumA">A</a><a className="bigA">A</a> | <a onClick={logout}>Wyloguj się</a>
      </div>
      <div className="Intro">
        <IntroHeader />
        <MenuButtonSmall text="Zaloguj się" link="/zaloguj-sie"/><br/>
        <MenuButtonSmall text="Kontynuuj bez logowania" link="/menu"/><br/>
      </div>
      </div>
    );
  }
  
  export default Intro;