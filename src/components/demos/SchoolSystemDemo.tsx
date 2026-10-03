import React, { useState } from 'react';
import { School, Smartphone, CheckCircle, Bell, UserCheck } from 'lucide-react';

export const SchoolSystemDemo: React.FC = () => {
  const [studentScore, setStudentScore] = useState(88);
  const [smsSent, setSmsSent] = useState(false);

  const handleSendSMS = () => {
    setSmsSent(true);
    setTimeout(() => setSmsSent(false), 4000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-xl mx-auto shadow-2xl space-y-5">
      {/* Platform Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
            <School className="w-5 h-5 text-purple-200" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">School Management Portal</h4>
            <p className="text-xs text-purple-400 font-mono">PHP, JS, MySQL & SMS Gateway</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300 font-semibold">
          Saved 10+ Hours/Wk
        </span>
      </div>

      {/* Gradebook Entry Box */}
      <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-semibold text-sm text-slate-100">Gradebook Update: Abebe Bikila</h5>
            <p className="text-xs text-slate-400">Class: Grade 11-A • Subject: Computer Science</p>
          </div>
          <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-mono font-bold rounded text-xs">
            Score: {studentScore}%
          </span>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-slate-400">Adjust Exam Score:</label>
          <input
            type="range"
            min="50"
            max="100"
            value={studentScore}
            onChange={(e) => setStudentScore(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>

        <button
          onClick={handleSendSMS}
          className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          <Smartphone className="w-4 h-4" />
          <span>Automate SMS Report Card to Parent (+251-911-XXXXXX)</span>
        </button>
      </div>

      {/* SMS Simulation Alert */}
      {smsSent && (
        <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Bell className="w-4 h-4" />
            <span>SMS Notification Triggered via Twilio Gateway!</span>
          </div>
          <p className="text-slate-300 font-mono">
            "Dear Parent, Abebe Bikila scored {studentScore}% in CS. Report card available on portal."
          </p>
        </div>
      )}
    </div>
  );
};
