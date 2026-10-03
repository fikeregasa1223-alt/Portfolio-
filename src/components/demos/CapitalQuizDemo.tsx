import React, { useState } from 'react';
import { Play, CheckCircle2, XCircle, RotateCcw, Trophy, Smartphone, Star } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: 'Computer Science',
    question: 'Which data structure operates on a First-In, First-Out (FIFO) basis?',
    options: ['Stack', 'Queue', 'Binary Tree', 'Hash Table'],
    correct: 1
  },
  {
    id: 2,
    category: 'Cybersecurity',
    question: 'What protocol is used for encrypted secure voting communication over HTTPS?',
    options: ['FTP', 'SSL / TLS', 'SMTP', 'Telnet'],
    correct: 1
  },
  {
    id: 3,
    category: 'Mobile Development',
    question: 'In Android App Development, which framework component handles real-time database sync?',
    options: ['SQLite Helper', 'Firebase Realtime DB', 'Shared Preferences', 'Intent Service'],
    correct: 1
  }
];

export const CapitalQuizDemo: React.FC = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === QUIZ_QUESTIONS[currentQ].correct) {
      setScore(score + 100);
    }
  };

  const handleNext = () => {
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-xl mx-auto shadow-2xl">
      {/* App Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-bold text-lg text-slate-950 shadow-md">
            CQ
          </div>
          <div>
            <h4 className="font-bold text-white text-base">CapitalQuiz Mobile Demo</h4>
            <p className="text-xs text-amber-400 font-mono">Live Interactive Android App Simulator</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs text-amber-300 font-medium">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>4.5 Rating</span>
        </div>
      </div>

      {!quizFinished ? (
        <div className="space-y-6">
          {/* Question Stats Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>
              Question {currentQ + 1} of {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              Score: {score} pts
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
              style={{ width: `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-2">
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider bg-amber-500/10 px-2 py-0.5 rounded">
              {QUIZ_QUESTIONS[currentQ].category}
            </span>
            <h5 className="text-base sm:text-lg font-semibold text-slate-100">
              {QUIZ_QUESTIONS[currentQ].question}
            </h5>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {QUIZ_QUESTIONS[currentQ].options.map((opt, idx) => {
              let btnStyle = 'bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-slate-700/80';
              if (selectedOption !== null) {
                if (idx === QUIZ_QUESTIONS[currentQ].correct) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                } else if (idx === selectedOption) {
                  btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && idx === QUIZ_QUESTIONS[currentQ].correct && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  )}
                  {selectedOption !== null && idx === selectedOption && idx !== QUIZ_QUESTIONS[currentQ].correct && (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {selectedOption !== null && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>{currentQ < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished View */
        <div className="text-center py-8 space-y-5">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h5 className="text-2xl font-bold text-white">Quiz Completed!</h5>
            <p className="text-sm text-slate-300 mt-1">
              Your Final Score: <span className="font-bold text-amber-400 text-lg">{score} / 300 pts</span>
            </p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 max-w-md mx-auto text-xs text-slate-300 space-y-1">
            <p className="font-semibold text-emerald-400">🔥 Real-Time Leaderboard Synchronized!</p>
            <p>Score successfully logged to Firebase Realtime Database in test mode.</p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
