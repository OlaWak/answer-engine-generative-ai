// components/CS3307Quiz.tsx
import { useState } from 'react';
import cs3307, { Question } from '../data/cs3307';

// Shuffle helper
function shuffleArray<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CS3307Quiz() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [finished, setFinished] = useState(false);

  const currentQuestion = shuffledQuestions[currentIndex];
  const total = shuffledQuestions.length;
  const bg = 'bg-gradient-to-br from-pink-100 via-white to-pink-200';

  const goBackToSectionSelect = () => {
    setSelectedSection(null);
    setShuffledQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedChoice('');
    setFinished(false);
  };
  

  // 1) Password screen
  if (!access) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${bg} text-gray-800 font-mono px-4`}>
        <p className="text-sm italic text-gray-600 mb-2">
          Say Bismillah for extra blessings 🤲🏻
        </p>
        <h2 className="text-xl font-bold mb-4 underline decoration-pink-500">
          3307 Practice Quiz — Good Luck!
        </h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md border w-64 mb-2 text-gray-800"
        />
        <button
          onClick={() => password === 'cs3307' ? setAccess(true) : alert('Wrong password!')}
          className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 font-semibold"
        >
          Unlock
        </button>
      </div>
    );
  }

  // 2) Section select screen
  if (access && !selectedSection) {
    const sections = ['PastExams', 'Patterns', 'C++'];

    return (
      <div className={`min-h-screen flex flex-col items-center justify-center gap-4 ${bg} text-gray-800 font-mono px-4`}>
        <h2 className="text-2xl font-bold underline decoration-pink-500 mb-2">Choose Section</h2>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => {
                const filtered = cs3307.filter(q => q.category === section);
                const shuffled = shuffleArray(filtered);
                setShuffledQuestions(shuffled);
                setSelectedSection(section);
              }}
              className="w-full py-3 bg-pink-400 hover:bg-pink-600 text-white rounded-md text-lg font-semibold"
            >
              {section === 'PastExams' ? 'Past Exams' : section === 'Patterns' ? 'Design Patterns' : 'C++'}
            </button>
          ))}
          <button
            onClick={goBackToSectionSelect}
            className="w-full py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md text-sm"
          >
            ⬅ Back to Main Menu
          </button>
        </div>
      </div>
    );
  }

  // 3) Results screen
  if (finished) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${bg} text-gray-800 font-mono px-4 text-center`}>
        <p className="text-sm italic text-gray-600 mb-2">
          That&apos;s a wrap! Good luck on the final don&apos;t forget ur Duaas 🫶🏻
        </p>
        <h2 className="text-xl font-bold mb-4 underline decoration-pink-500">
          3307 Practice Quiz — Results
        </h2>
        <h1 className="text-4xl font-bold mb-4">🎉 Quiz Complete!</h1>
        <p className="text-xl mb-4">
          Your Score: <span className="text-green-600 font-bold">{score}</span> / {total}
        </p>
        <button
          onClick={goBackToSectionSelect}
          className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md text-sm"
        >
          ⬅ Back to Main Menu
        </button>
      </div>
    );
  }

  // 4) Main quiz screen
  const handleAnswer = (choice: string) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
    if (choice === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedChoice('');
    if (currentIndex + 1 < total) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${bg} text-gray-800 font-mono px-4`}>
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-2xl w-full text-center border border-pink-200">
        <h2 className="text-xl font-bold mb-2 underline decoration-pink-500">3307 Practice Quiz</h2>
        <h2 className="text-2xl font-bold mb-4">
          Question {currentIndex + 1} / {total}
        </h2>

        <div className="text-left mb-4">
          {currentQuestion.code && (
            <pre className="bg-gray-100 p-4 rounded font-mono whitespace-pre-wrap text-sm">
              {currentQuestion.code}
            </pre>
          )}
          <p className="mt-2 text-lg">{currentQuestion.question}</p>
        </div>

        {currentQuestion.image && (
          <img
            src={currentQuestion.image}
            alt="Question related"
            className="mx-auto mb-6 max-h-64"
          />
        )}

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
              <>✅ Correct! <span className="text-pink-600">u&apos;re cookingg 👩🏻‍🍳</span></>
            ) : (
              <>❌ Not quite! <span className="text-pink-600">u&apos;re getting cooked 😔✋</span></>
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

        {(() => {
          const attempted = currentIndex + (showFeedback ? 1 : 0);
          const percent = attempted === 0 ? 0 : Math.round((score / attempted) * 100);
          let msg = "";

          if (percent >= 90) {
            msg = "💪🏻 MashaAllah ";
          } else if (percent >= 75) {
            msg = "🧠 U got brainzzz fr fr";
          } else if (percent >= 50) {
            msg = "😅 Not bad not bad keep grinding";
          } else {
            msg = "🔐 It's giving... u should duaa, tahajjud, and lock in";
          }

          return (
            <p className="mt-6 text-sm text-gray-600">
              Score: <span className="text-pink-600 font-bold">{score} / {attempted}</span> (
              <span className="font-semibold">{percent}%</span>)<br />
              <span className="italic">{msg}</span>
            </p>
          );
        })()}

        <button
          onClick={goBackToSectionSelect}
          className="mt-6 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md text-sm"
        >
          ⬅ Back to Main Menu
        </button>
      </div>
    </div>
  );
}
