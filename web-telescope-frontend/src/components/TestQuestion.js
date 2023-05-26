import React, { useEffect, useState } from "react";

async function checkAnswerHandle(answer) {
    return fetch('http://127.0.0.1:8000/answers/' + answer +"/check?format=json")
      .then(data => data.json())
      .then(data => data.is_correct)
   }

function TestQuestion(props) {

    const [sections, setSections] = useState(new Array(props.data.number_of_questions).fill(1))
    const [user, setUser] = useState("")

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

        fetch('http://127.0.0.1:8000/users/'+"2"+"/scores", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "test_id":props.data.id,
                "score":sum,
                "date": today.toISOString()
              })
          })
      }
      
    useEffect(() => {
    const userString = sessionStorage.getItem('userid');
    console.log(userString)
    setUser(sessionStorage.getItem('userid'))
    console.log(user)
  }, [])

    return (
        <div>
            {sections && console.log(sections)}
        <form onSubmit={handleAnswers}>   
        {props.data.questions.map((question, index) =>
        <div className="question">
            <h4 className="question-number">Pytanie {index+1}/{props.data.number_of_questions}</h4>
            <div className="test-content">
                <div className="question-content">
                    <p>{question.question}</p>
                    {question.photo && <img src={require("../assets/content/" + question.photo.url)} alt="question help"/>}
                </div>
                <div className="answers">
                        <div>
                        { question.answers.map( answer =>
                            <div className="answers-col">
                                <label htmlFor={"q"+question.id+"a"+answer.id}>{answer.text}</label>
                                <input type="radio" onChange={e => handleChange(e.target.value, index)} id={"q"+question.id+"a"+answer.id} name={question.id} value={answer.id} />
                            </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
        )}
            <input type="submit" value="Zakończ podejście" className="form-submit" />
        </form> 
        </div>
    );
  }
  
  export default TestQuestion;