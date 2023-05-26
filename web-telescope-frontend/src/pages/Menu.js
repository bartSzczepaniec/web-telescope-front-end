import MainNav from "../components/MainNav";
import StandardHeader from "../components/StandardHeader";

function Menu() {
    return (
      <div>
        <StandardHeader title="MENU" />
        <div className="Menu">
          <MainNav />
        </div>
      </div>
    );
  }
  
  export default Menu;