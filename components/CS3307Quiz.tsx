import { useState } from 'react';
import cs3307 from '../data/cs3307';

export default function CS3307Quiz() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [finished, setFinished] = useState(false);

  const checkPassword = () => {
    if (password === 'cs3307') {
      setAccess(true);
    } else {
      alert('Wrong password!');
    }
  };

  const handleAnswer = (choice: string) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
    if (choice === cs3307[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedChoice('');
    if (currentIndex + 1 < cs3307.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const bg = 'bg-gradient-to-br from-pink-100 via-white to-pink-200';

  if (!access) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${bg} text-gray-800 font-mono px-4`}>
        <p className="text-sm italic text-gray-600 mb-2">Say Bismillah for extra blessings 🤲🏻</p>
        <h2 className="text-xl font-bold mb-4 underline decoration-pink-500">3307 Practice Quiz — Good Luck!</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md border w-64 mb-2 text-gray-800"
        />
        <button
          onClick={checkPassword}
          className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 font-semibold"
        >
          Unlock
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${bg} text-gray-800 font-mono px-4 text-center`}>
        <p className="text-sm italic text-gray-600 mb-2">That’s a wrap! Bismillah came through 🫶🏻</p>
        <h2 className="text-xl font-bold mb-4 underline decoration-pink-500">3307 Practice Quiz — Results</h2>
        <h1 className="text-4xl font-bold mb-4">🎉 Quiz Complete!</h1>
        <p className="text-xl">
          Your Score: <span className="text-green-600 font-bold">{score}</span> / {cs3307.length}
        </p>
      </div>
    );
  }

  const currentQuestion = cs3307[currentIndex];

  return (
    <div className={`min-h-screen flex items-center justify-center ${bg} text-gray-800 font-mono px-4`}>
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-2xl w-full text-center border border-pink-200">
        <h2 className="text-xl font-bold mb-2 underline decoration-pink-500">3307 Practice Quiz</h2>
        <h2 className="text-2xl font-bold mb-4">Question {currentIndex + 1} / {cs3307.length}</h2>
        <p className="text-lg mb-6">{currentQuestion.question}</p>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.choices.map((choice, idx) => {
            let baseStyle = 'py-3 px-5 rounded-xl font-semibold cursor-pointer border transition-all duration-200';
            let style = 'border-gray-300 hover:bg-pink-100';

            if (showFeedback) {
              if (choice === currentQuestion.correctAnswer) {
                style = 'bg-green-100 border-green-500';
              } else if (choice === selectedChoice && choice !== currentQuestion.correctAnswer) {
                style = 'bg-red-100 border-red-400';
              }
            } else if (choice === selectedChoice) {
              style = 'bg-pink-200 border-pink-400';
            }

            return (
              <div
                key={idx}
                onClick={() => !showFeedback && handleAnswer(choice)}
                className={`${baseStyle} ${style}`}
              >
                {choice}
              </div>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-6 text-lg font-semibold">
            {selectedChoice === currentQuestion.correctAnswer ? (
              <>
                ✅ Correct! <span className="text-pink-600">Yallah, next question!</span>
              </>
            ) : (
              <>
                ❌ Not quite! <span className="text-pink-600"> In Sha Allah next one</span>
              </>
            )}
            <br />
            <button
              onClick={nextQuestion}
              className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md"
            >
              Next Question
            </button>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-600">
          Score: <span className="text-pink-600 font-bold">{score}</span>
        </p>
      </div>
    </div>
  );
}
