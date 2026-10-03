import React, { useState } from 'react';
import { Play, BookOpen, CheckCircle, Award, Users, Star, Layers } from 'lucide-react';

export const ElearningDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'quiz' | 'students'>('video');
  const [completed, setCompleted] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-xl mx-auto shadow-2xl space-y-5">
      {/* Platform Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
            <BookOpen className="w-5 h-5 text-blue-200" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Online Learning System</h4>
            <p className="text-xs text-blue-400 font-mono">Full-Stack PHP, MySQL & Bootstrap Platform</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300 font-semibold">
          500+ Active Users
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('video')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
            activeTab === 'video' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>Lecture Video</span>
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
            activeTab === 'quiz' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Course Quiz</span>
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
            activeTab === 'students' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Admin Role Stats</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'video' && (
        <div className="space-y-4">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              alt="Lecture preview"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
              <button
                onClick={() => setCompleted(true)}
                className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 fill-white ml-1" />
              </button>
            </div>
          </div>

          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
            <h5 className="font-semibold text-sm text-slate-100">Module 4: PHP & MySQL Database Normalization</h5>
            <p className="text-xs text-slate-300">Instructor: Fikadu Regasa • Duration: 45 Mins</p>
            {completed && (
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1 pt-1">
                <CheckCircle className="w-4 h-4" /> Progress Saved to MySQL Database (100% Watched)
              </p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-3">
          <h5 className="font-semibold text-sm text-slate-100">Module Quiz: Database Relations</h5>
          <p className="text-xs text-slate-300">Which foreign key constraint prevents orphaned child records?</p>

          <div className="space-y-2">
            <button
              onClick={() => setCompleted(true)}
              className="w-full text-left p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-semibold flex items-center justify-between"
            >
              <span>ON DELETE CASCADE</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </button>
            <button className="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 text-xs">
              ON UPDATE NULL
            </button>
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <span className="text-slate-400">Total Enrolled</span>
            <div className="text-xl font-mono font-bold text-blue-400">542 Students</div>
          </div>
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <span className="text-slate-400">Quizzes Evaluated</span>
            <div className="text-xl font-mono font-bold text-emerald-400">1,280 Auto-Graded</div>
          </div>
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 col-span-2">
            <span className="text-slate-400">Admin Workload Reduction</span>
            <div className="text-base font-bold text-white">60% Reduction via automated role-based portals</div>
          </div>
        </div>
      )}
    </div>
  );
};
