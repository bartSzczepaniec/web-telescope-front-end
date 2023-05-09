import IntroHeader from "../components/IntroHeader";
import MenuButtonSmall from "../components/MenuButtonSmall";

function Intro() {
    return (
      <div className="Intro">
        <IntroHeader />
        <MenuButtonSmall text="Zaloguj się" link="/zaloguj-sie"/><br/>
        <MenuButtonSmall text="Kontynuuj bez logowania" link="/menu"/><br/>
      </div>
    );
  }
  
  export default Intro;