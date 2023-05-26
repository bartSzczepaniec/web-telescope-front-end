import StandardHeader from "../components/StandardHeader";
import React, { useEffect, useState } from "react";
import SectionMenuButton from "../components/SectionMenuButton";

function TestMenu() {
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
        <div className="Menu">
          <StandardHeader title="UCZ SIĘ" />
          <nav className="Main-nav">
          {sections.map(section => 
             <div className="nav-col">
              <SectionMenuButton text={section.title}link={"/testy-dzial?id=" + section.id} icon={require("../assets/content/" + section.photo.url)} />
             </div>
          )}
          </nav>
        </div>
      );
  }
  
  export default TestMenu;