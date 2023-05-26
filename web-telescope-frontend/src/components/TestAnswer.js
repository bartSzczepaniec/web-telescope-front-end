function TestAnswer() {
    return (
        <div className="question">
            <h4 className="question-number">Pytanie 1/1</h4>
            <div className="test-content">
                <div className="answers">
                <h3 className="answer-feedback">Poprawna odpowiedź</h3>
                    <form>
                        <input type="submit" name="go_next" value="Przejdź dalej" />
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default TestAnswer;