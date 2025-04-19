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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-mono">
        <h2 className="text-2xl mb-4">🔒 Protected Page</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md text-black mb-2"
        />
        <button onClick={checkPassword} className="px-4 py-2 bg-purple-500 rounded-md hover:bg-purple-600">
          Unlock
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-mono text-center">
        <h1 className="text-3xl mb-6">🎉 Quiz Complete!</h1>
        <p className="text-xl">Your Score: <span className="text-green-400">{score}</span> / {cs3307.length}</p>
      </div>
    );
  }

  const currentQuestion = cs3307[currentIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-mono px-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-2xl">
        <div className="mb-4">
          <h2 className="text-2xl mb-2">Question {currentIndex + 1} of {cs3307.length}</h2>
          <p className="text-lg">{currentQuestion.question}</p>
        </div>
        <div className="space-y-2">
          {currentQuestion.choices.map((choice, idx) => {
            let bg = 'bg-gray-700';
            if (showFeedback) {
              if (choice === currentQuestion.correctAnswer) bg = 'bg-green-600';
              else if (choice === selectedChoice && choice !== currentQuestion.correctAnswer) bg = 'bg-red-600';
            } else if (choice === selectedChoice) {
              bg = 'bg-purple-600';
            }
            return (
              <div
                key={idx}
                onClick={() => !showFeedback && handleAnswer(choice)}
                className={`${bg} px-4 py-2 rounded-md cursor-pointer hover:brightness-125`}
              >
                {choice}
              </div>
            );
          })}
        </div>
        {showFeedback && (
          <div className="mt-4 text-lg">
            {selectedChoice === currentQuestion.correctAnswer ? '✅ Correct!' : `❌ Wrong! Correct: ${currentQuestion.correctAnswer}`}
            <br />
            <button onClick={nextQuestion} className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
              Next Question
            </button>
          </div>
        )}
        <p className="mt-6 text-sm text-gray-400">Score: <span className="text-green-400 font-bold">{score}</span></p>
      </div>
    </div>
  );
}
