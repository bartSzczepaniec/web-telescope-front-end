import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import StandardHeader from "../components/StandardHeader";

function Subject() {
  const [paragraphs, setParagraphs] = useState([])
  const [title, setTitle] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [time, setTime] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const [photos, setPhotos] = useState("")
  const fetchChaptersData = () => {
    fetch("http://127.0.0.1:8000/topics/" + searchParams.get("id") + "?format=json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTitle(data.title)
        setParagraphs(data.paragraphs)
        setDifficulty(data.difficulty)
        setTime(data.time_investment)
        setPhotos(data.photos)
      })
  }

  useEffect(() => {
    fetchChaptersData()
  }, [])

    return (
      <div className="Subject">
        <StandardHeader />
        <div className="wide-content-container">
            {searchParams.get("dzial") && <Link to={"/ucz-sie-dzial?id=" + searchParams.get("dzial")}>Wróć do wyboru rozdziałów i tematów › </Link>}
            <div className="wide-content">
                {title && <h3 className="content-header">{title}</h3>}
                <div className="main-content subject">
                {difficulty && <h4>Poziom trudnośći: {difficulty}</h4>}
                {time > 1 && <h4 className="time">Czas: {time} minut(y)</h4>}
                {time == 1 && <h4 className="time">Czas: {time} minuta</h4>}
                {paragraphs.map(paragraph =>
                  <div>
                    <h5>{paragraph.title}</h5>
                    <p>{paragraph.text}</p>
                    {paragraph.photos.map(photo =>
                      <img src={require("../assets/content/" + photo.url)} alt={photo.alt}/>
                      )}
                      
                  </div>
                  )}
                  {photos && photos.map(photo =>
                  <div>
                      <img src={require("../assets/content/" + photo.url)} alt={photo.alt}/> 
                  </div>
                  )}
                  {searchParams.get("dzial") && <Link to={"/ucz-sie-dzial?id=" + searchParams.get("dzial")}>Wróć do wyboru rozdziałów i tematów › </Link>}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Subject;