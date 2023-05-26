function TestFeedback() {
    return (
        <div className="question">
            <h4 className="question-number">Pytanie 1/1</h4>
            <div className="test-content">
                <div className="question-content">
                    <h3>KONIEC TESTU</h3>
                    <h4>WYNIK 1/1</h4>
                    <h5>Zyskałeś 999 punktów doświadczenia!</h5>
                </div>
                <div className="answers">
                    <form>
                        <div className="answers-col">
                            <button>Rozwiąż test jeszcze raz</button>
                        </div>
                        <div className="answers-col">
                            <button>Wróć do wyboru testów</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default TestFeedback;