import React, { useState } from 'react';
import { Shield, CheckCircle, Lock, BarChart3, RefreshCw } from 'lucide-react';

export const VotingSystemDemo: React.FC = () => {
  const [voterId, setVoterId] = useState('ETH-8829-VOTER');
  const [votedCandidate, setVotedCandidate] = useState<string | null>(null);
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const [tally, setTally] = useState<Record<string, number>>({
    'Dr. Aster Gugsa (Tech Innovation)': 124,
    'Eng. Dawit Kebede (Infrastructure)': 98,
    'Abebe Tadesse (Youth & Education)': 82
  });

  const handleCastVote = (candidate: string) => {
    if (voteSubmitted) return;
    setVotedCandidate(candidate);
    setVoteSubmitted(true);
    setTally((prev) => ({
      ...prev,
      [candidate]: prev[candidate as keyof typeof prev] + 1
    }));
  };

  const handleReset = () => {
    setVoteSubmitted(false);
    setVotedCandidate(null);
  };

  const totalVotes: number = (Object.values(tally) as number[]).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-xl mx-auto shadow-2xl">
      {/* Platform Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
            <Shield className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Encrypted Voting System</h4>
            <p className="text-xs text-cyan-400 font-mono">Python / Flask + OAuth & SHA-256 Token Verification</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
          <Lock className="w-3.5 h-3.5" />
          <span>SSL 256-Bit Encrypted</span>
        </div>
      </div>

      {!voteSubmitted ? (
        <div className="space-y-5">
          {/* Voter Verification Badge */}
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="text-slate-400 font-mono text-[10px]">VERIFIED VOTER TOKEN:</span>
              <p className="font-mono text-cyan-300 font-semibold">{voterId}</p>
            </div>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 font-semibold rounded text-[10px]">
              AUTHENTICATED
            </span>
          </div>

          <h5 className="text-sm font-semibold text-slate-200 uppercase tracking-wider text-xs">
            Select Candidate for Executive Committee:
          </h5>

          {/* Candidate Radio Buttons */}
          <div className="space-y-3">
            {Object.keys(tally).map((cand) => (
              <button
                key={cand}
                onClick={() => handleCastVote(cand)}
                className="w-full text-left p-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h6 className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                    {cand}
                  </h6>
                  <p className="text-xs text-slate-400">Cryptographically signed ballot option</p>
                </div>
                <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs font-semibold rounded-lg group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  Vote Ballot
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Live Results Graph View */
        <div className="space-y-6">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Encrypted Vote Recorded Successfully!</span>
            </div>
            <p className="text-xs text-slate-300">
              Voter token <span className="font-mono text-cyan-300">{voterId}</span> marked as used. Duplicate votes blocked.
            </p>
          </div>

          {/* Tally Chart */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 font-bold text-white">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                Live Election Tally Visualization
              </span>
              <span>Total Votes: {totalVotes}</span>
            </div>

            <div className="space-y-3">
              {Object.entries(tally).map(([cand, count]) => {
                const countNum = Number(count);
                const percentage = totalVotes > 0 ? Math.round((countNum / totalVotes) * 100) : 0;
                const isWinner = cand === votedCandidate;

                return (
                  <div key={cand} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-200">
                      <span>{cand}</span>
                      <span className="font-mono font-bold text-cyan-300">{count} votes ({percentage}%)</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isWinner ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-slate-600'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold rounded-lg border border-slate-700 flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulate Next Voter</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
