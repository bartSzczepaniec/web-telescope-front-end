import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import StandardHeader from "../components/StandardHeader";
import arrow from '../assets/right-arrow-icon.svg';
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const navigate = useNavigate();

    const [user, setUser] = useState(sessionStorage.getItem('userid'))
    const [userdata, setUserdata] = useState([])
    const [userscores, setUserscores] = useState([])
    const [usertopics, setUsertopics] = useState([])

    const fetchUserData = () => {
        fetch("http://127.0.0.1:8000/users/" + user + "?format=json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUserdata(data)
          }).catch(err => { const mute = err })
        fetch("http://127.0.0.1:8000/users/" + user + "/scores?format=json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUserscores(data)
          }).catch(err => { const mute = err })
        fetch("http://127.0.0.1:8000/users/" + user + "/favourited_topics?format=json")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsertopics(data)
          }).catch(err => { const mute = err })
      }
     


    useEffect(() => {
        const tokenString = sessionStorage.getItem('userid');
        if(!tokenString || typeof tokenString === 'undefined' || tokenString === null) {
          navigate("/zaloguj-sie");
        }
        fetchUserData()
      }, [])

      const checkScore = (correct_answers, questions) => {
        const score = getScore(correct_answers, questions)
        if(score < 50.0) {
            return "bad-score"
        }
        else if (score < 70.0) {
            return "medium-score"
        }
        else {
            return "good-score"
        }
      }

      const getScore = (correct_answers, questions) => {
        return (100 * (1.0 * correct_answers) / questions).toFixed(2)
      }
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
                        Login: {userdata.username}<br/>
                        Email: {userdata.email}<br/>
                        </div>
                    </div>
                    <div className="profile-col-r">
                        <div className="profile-col-content">
                        <h4>Poziom użytkownika</h4>
                        <h5>Poziom doświadczenia: {userdata.level}</h5>
                        <h5>Łączna ilość punktów doświadczenia: {userdata.xp}</h5>
                        </div>
                    </div>
                    <div className="profile-col-l">
                        <div className="profile-col-content">
                        <h4>Wyniki testów</h4>
                        <div className="scores">
                            {userscores.map( userscore =>
                            <span>Wynik testu "{userscore.test.title}" = <span className={checkScore(userscore.score, userscore.test.number_of_questions)}>
                                {getScore(userscore.score, userscore.test.number_of_questions)}%</span><br/></span>

                            )}
                        </div>
                        </div>
                    </div>
                    <div className="profile-col-r liked-topics">
                        <div className="profile-col-content">
                        <h4>Polubione tematy</h4>
                        {usertopics.map( usertopic =>
                        <div className="topic">
                            <Link to={"/temat?id="+usertopic.id+"&dzial="+usertopic.section}>
                                <img className="topic-arrow" src={arrow} alt="arrow" /> <h5 className="topic-title">{usertopic.title}</h5>
                            </Link>
                        </div>
                        )}
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