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

  if (!access) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-indigo-700 text-white font-mono px-4">
        <h2 className="text-3xl mb-4 font-bold">🔒 Protected Page</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md text-black mb-2 w-64"
        />
        <button onClick={checkPassword} className="px-6 py-2 bg-white text-purple-700 rounded-md hover:bg-gray-200 font-semibold">
          Unlock
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-indigo-700 text-white font-mono px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Quiz Complete!</h1>
        <p className="text-xl">Your Score: <span className="text-green-300 font-bold">{score}</span> / {cs3307.length}</p>
      </div>
    );
  }

  const currentQuestion = cs3307[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-indigo-700 text-white font-mono px-4">
      <div className="bg-black bg-opacity-50 rounded-2xl p-8 shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Question {currentIndex + 1} / {cs3307.length}</h2>
        <p className="text-lg mb-6">{currentQuestion.question}</p>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.choices.map((choice, idx) => {
            let baseStyle = 'py-3 px-5 rounded-xl font-semibold cursor-pointer border-2 transition-all';
            let style = 'border-white bg-white bg-opacity-10 hover:bg-opacity-20';

            if (showFeedback) {
              if (choice === currentQuestion.correctAnswer) {
                style = 'bg-green-500 border-green-300';
              } else if (choice === selectedChoice && choice !== currentQuestion.correctAnswer) {
                style = 'bg-red-500 border-red-300';
              }
            } else if (choice === selectedChoice) {
              style = 'bg-purple-600 border-purple-400';
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
            {selectedChoice === currentQuestion.correctAnswer ? '✅ Correct!' : `❌ Wrong! Correct: ${currentQuestion.correctAnswer}`}
            <br />
            <button
              onClick={nextQuestion}
              className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Next Question
            </button>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-300">
          Score: <span className="text-green-300 font-bold">{score}</span>
        </p>
      </div>
    </div>
  );
}
