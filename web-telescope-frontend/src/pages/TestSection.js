import { Link } from "react-router-dom";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import ChapterList from "../components/ChapterList";
import ChapterTestList from "../components/ChapterTestList";
import StandardHeader from "../components/StandardHeader";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function TestSection() {
  const [chapters, setChapters] = useState([])
  const [title, setTitle] = useState("")
  const [photo, setPhoto] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchChaptersData = () => {
    fetch("http://127.0.0.1:8000/sections/" + searchParams.get("id") + "/tests?format=json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setChapters(data);
      }).catch(err => { const mute = err })
      fetch("http://127.0.0.1:8000/sections/" + searchParams.get("id") + "?format=json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTitle(data.title);
        setPhoto(data.photo.url);
      }).catch(err => { const mute = err })
  }

  useEffect(() => {
    fetchChaptersData()
  }, [])

    return (
      <div className="Test-section">
        <StandardHeader />
        <div className="wide-content-container">
            <Link to="/menu-ucz-sie">Wróć do wyboru działów ›</Link>
            <div className="wide-content">
            <h3 className="content-header">{title} {photo.url}</h3>
                <div className="content-top-image-container">
                  {photo && <img src={require(("../assets/content/" +  photo))} alt={'Dzial 1'}/>}
                </div>
                <div className="main-content">
                  {chapters.map(chapter => 
                   <ChapterTestList data={chapter} sectionid={searchParams.get("id")} />
                    )}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default TestSection;