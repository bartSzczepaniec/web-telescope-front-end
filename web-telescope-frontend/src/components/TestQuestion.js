import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

async function checkAnswerHandle(answer) {
    return fetch('http://127.0.0.1:8000/answers/' + answer +"/check?format=json")
      .then(data => data.json())
      .then(data => data.is_correct).catch(err => { const mute = err })
   }

function TestQuestion(props) {
    const navigate = useNavigate();

    const [sections, setSections] = useState(new Array(props.data.number_of_questions).fill(1))
    const [user, setUser] = useState(sessionStorage.getItem('userid'))
    const [completed, setCompleted] = useState(false)
    const [points, setPoints] = useState(0)
    const handleChange = function(e, index) {
        let newSections = sections
        newSections[index] = e
        setSections(newSections)
        console.log(sections)
      }

      const handleAnswers = async e => {
        e.preventDefault();
        let sum = 0;
        for (let i = 0 ; i < props.data.number_of_questions; i++) {
            const correct = await checkAnswerHandle(sections[i]);
            if(correct){
            sum += 1;
            }
        }
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        fetch('http://127.0.0.1:8000/users/'+ user +"/scores", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "test_id":props.data.id,
                "score":sum,
                "date": today.toISOString()
              })
          }).catch(err => { const mute = err })
          setPoints(sum)
          setCompleted(true)
      }
      
      useEffect(() => {
        const tokenString = sessionStorage.getItem('userid');
        if(!tokenString || typeof tokenString === 'undefined' || tokenString === null) {
          navigate("/zaloguj-sie");
        }
      }, [])

    if (!completed){
    return (
        <div>
        <form onSubmit={handleAnswers}>   
        {props.data.questions.map((question, index) =>
        <div className="question">
            <h4 className="question-number">Pytanie {index+1}/{props.data.number_of_questions}</h4>
            <div className="test-content">
                <div className="question-content">
                    <p>{question.question}</p>
                    {question.photo && <img src={require("../assets/content/" + question.photo.url)} alt="question help"/>}
                    <div>
                        { question.answers.map( answer =>
                            <div className="answer-option">
                                <div className="radio-option">
                                <input type="radio" onChange={e => handleChange(e.target.value, index)} id={"q"+question.id+"a"+answer.id} name={question.id} value={answer.id} />
                                </div>
                                <div className="label-option">
                                <label htmlFor={"q"+question.id+"a"+answer.id}>{answer.text}</label>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
                <div className="answers">
                </div>
            </div>
        </div>
        )}
            <input type="submit" value="Zakończ podejście" className="form-submit" />
        </form> 
        </div>
    );
    }
    else {
        return(
            <div className="question">
            <div className="test-content">
                <div className="question-content">
                    <h3>KONIEC TESTU</h3>
                    <h4>WYNIK {points}/{props.data.number_of_questions}</h4>
                </div>
                <div className="answers">
                    <div className="answers-col">
                        <button onClick={ () => window.location.reload()}>Rozwiąż test jeszcze raz</button>
                    </div>
                    <div className="answers-col">
                        <Link to={"/testy-dzial?id="+props.sectionid}><button>Wróć do wyboru testów</button></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default TestQuestion;