import { useState } from 'react';
import cs3307 from '../data/cs3307';

export default function CS3307Quiz() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const checkPassword = () => {
    if (password === 'cs3307bestie') {
      setAccess(true);
    } else {
      alert('Wrong password!');
    }
  };

  const handleSelect = (index: number, choice: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = choice;
    setUserAnswers(newAnswers);
  };

  const grade = () => {
    setSubmitted(true);
  };

  if (!access) {
    return (
      <div style={{ padding: 50 }}>
        <h2>🔒 Protected Page</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={checkPassword}>Unlock</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>📝 CS3307 Multiple Choice Quiz</h1>
      {cs3307.map((q, index) => (
        <div key={index} style={{ marginBottom: 30 }}>
          <h3>{index + 1}. {q.question}</h3>
          {q.choices.map((choice, cIndex) => {
            const isSelected = userAnswers[index] === choice;
            const isCorrect = submitted && choice === q.correctAnswer;
            const isWrong = submitted && isSelected && choice !== q.correctAnswer;

            return (
              <div key={cIndex} style={{
                margin: '5px 0',
                padding: '5px 10px',
                borderRadius: '6px',
                backgroundColor: isCorrect ? '#c8f7c5' :
                                 isWrong ? '#f8d7da' :
                                 isSelected ? '#d0d0ff' : '#f0f0f0',
                cursor: 'pointer'
              }}
              onClick={() => handleSelect(index, choice)}
              >
                {choice}
              </div>
            );
          })}
          {submitted && (
            <p>
              {userAnswers[index] === q.correctAnswer
                ? '✅ Correct!'
                : `❌ Wrong. Correct: ${q.correctAnswer}`}
            </p>
          )}
        </div>
      ))}
      {!submitted && (
        <button onClick={grade}>Submit Quiz</button>
      )}
    </div>
  );
}
