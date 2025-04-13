// Quiz.jsx - Komponent för att visa och hantera quiz-frågor
import { useState } from 'react';
import { quizData } from '../utils/dataHelpers';

function Quiz({ onComplete }) {
  // State för användarens svar
  const [userAnswers, setUserAnswers] = useState({});
  // State för att visa feedback för varje fråga
  const [feedback, setFeedback] = useState({});
  // State för att se om testet är inskickat
  const [isSubmitted, setIsSubmitted] = useState(false);
  // State för att se om alla frågor är rätt besvarade
  const [allCorrect, setAllCorrect] = useState(false);

  // Hantera ändringar i användarens svar
  const handleAnswerChange = (questionId, answerId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerId
    });
  };

  // Kontrollera svaren när användaren skickar in
  const checkAnswers = () => {
    const newFeedback = {};
    let correctCount = 0;
    
    quizData.forEach(question => {
      const isCorrect = userAnswers[question.id] === question.correctAnswer;
      newFeedback[question.id] = {
        isCorrect,
        message: isCorrect ? question.correctFeedback : question.incorrectFeedback
      };
      
      if (isCorrect) correctCount++;
    });
    
    setFeedback(newFeedback);
    setIsSubmitted(true);
    
    // Om alla frågor är rätt besvarade, markera quizet som klart
    if (correctCount === quizData.length) {
      setAllCorrect(true);
      onComplete(); // Anropa den tillhandahållna callback-funktionen
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz: Testa dina kunskaper</h2>
      <p>Besvara följande frågor för att testa din förståelse av generativ AI.</p>
      
      {quizData.map(question => (
        <div key={question.id} className="quiz-question">
          <h3>{question.question}</h3>
          <div className="options">
            {question.options.map(option => (
              <label 
                key={option.id} 
                className={`option ${userAnswers[question.id] === option.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={userAnswers[question.id] === option.id}
                  onChange={() => handleAnswerChange(question.id, option.id)}
                  disabled={isSubmitted}
                />
                {option.text}
              </label>
            ))}
          </div>
          
          {/* Visa feedback om testet är inskickat */}
          {feedback[question.id] && (
            <div className={`feedback ${feedback[question.id].isCorrect ? 'correct' : 'incorrect'}`}>
              {feedback[question.id].message}
            </div>
          )}
        </div>
      ))}
      
      <button 
        onClick={checkAnswers}
        disabled={isSubmitted && allCorrect}
        className="submit-btn"
      >
        {isSubmitted ? (allCorrect ? 'Alla rätt!' : 'Försök igen') : 'Kontrollera svar'}
      </button>
      
      {isSubmitted && !allCorrect && (
        <p>Rätta de felaktiga svaren och försök igen.</p>
      )}
      
      {allCorrect && (
        <p>Gratulerar! Du har klarat quizet. Nu kan du se lösningen!</p>
      )}
    </div>
  );
}

export default Quiz; 