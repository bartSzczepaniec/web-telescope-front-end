import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import ChapterList from "../components/ChapterList";
import StandardHeader from "../components/StandardHeader";

function LearnSection() {
  const [chapters, setChapters] = useState([])
  const [title, setTitle] = useState("")
  const [photo, setPhoto] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchChaptersData = () => {
    fetch("http://127.0.0.1:8000/sections/" + searchParams.get("id") + "?format=json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setChapters(data.chapters);
        setTitle(data.title);
        setPhoto(data.photo.url);
      })
  }

  useEffect(() => {
    fetchChaptersData()
  }, [])

    return (
      <div className="Learn-section">
        <StandardHeader />
        <div className="wide-content-container">
            <Link to="/menu-ucz-sie">Wróć do wyboru działów ›</Link>
            <div className="wide-content">
                <h3 className="content-header">{title} {photo.url}</h3>
                <div className="content-top-image-container">
                  {photo && <img src={require(("../assets/content/" +  photo))} alt={'Dzial 1'}/>}
                </div>
                <div className="main-content">
                  {chapters.map(chapter => <ChapterList data={chapter} section={searchParams.get("id")} />)}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default LearnSection;