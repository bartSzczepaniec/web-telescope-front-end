import React, { useEffect, useState } from "react";
import SectionMenuButton from "../components/SectionMenuButton";
import StandardHeader from "../components/StandardHeader";


function LearnMenu() {
  const [sections, setSections] = useState([])

  const fetchSectionsData = () => {
    fetch("http://127.0.0.1:8000/sections?format=json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSections(data)
        return data
      })
  }

  useEffect(() => {
    fetchSectionsData()
  }, [])

    return (
      <div>
        <StandardHeader title="UCZ SIĘ" />
      <div className="Menu">
        <nav className="Main-nav">
          {sections.map(section => 
             <div className="nav-col">
              <SectionMenuButton text={section.title}link={"/ucz-sie-dzial?id=" + section.id} icon={require("../assets/content/" + section.photo.url)} />
             </div>
          )}
        </nav>
      </div>
      </div>
    );
  }
  
  export default LearnMenu;