import {
  ZapIcon,
  PieChartIcon,
  BookOpenIcon,
  TrophyIcon
} from "lucide-react";

function SubmissionResultModal({ isOpen, onClose, result, problemName }) {
  if (!isOpen || !result) return null;
  const isAccepted = result.status === "Accepted";

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-4xl bg-[#1a1a1a] p-0 overflow-hidden border border-white/5 shadow-2xl rounded-xl">
        {/* TOP ACTION BAR */}
        <div className="flex items-center justify-between p-4 bg-[#262626] border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className={`text-lg font-bold ${isAccepted ? "text-[#2db55d]" : "text-error"}`}>
              {isAccepted ? "Accepted" : "Wrong Answer"}
            </span>
            <span className="text-white/40 text-sm">
              {result.passedCount} / {result.totalCount} testcases passed
            </span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm bg-[#3a3a3a] border-none text-[#9e9e9e] hover:bg-[#4a4a4a] gap-2">
              <ZapIcon className="size-4 text-purple-400" /> Analysis
            </button>
            <button className="btn btn-sm bg-[#2db55d] border-none text-white hover:bg-[#269a4f] gap-2">
              <BookOpenIcon className="size-4" /> Solution
            </button>
            <button className="btn btn-ghost btn-sm btn-circle text-white/40" onClick={onClose}>✕</button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* USER INFO */}
          <div className="flex items-center gap-2 text-sm text-white/60">
             <div className="w-6 h-6 rounded-full bg-blue-500"></div>
             <span className="font-medium text-white">Spadhiali</span>
             <span>submitted at Apr 24, 2026 22:19</span>
          </div>

          {/* MAIN STATS GRID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#262626] p-6 rounded-lg border border-white/5">
              <div className="flex items-center gap-2 text-white/60 mb-2">
                <ZapIcon className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Runtime</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">{result.runtime} ms</span>
              </div>
              <div className="mt-2 text-xs text-white/60 font-medium">
                Beats <span className="text-white">100.00%</span> 🟢
              </div>
            </div>

            <div className="bg-[#262626] p-6 rounded-lg border border-white/5">
               <div className="flex items-center gap-2 text-white/60 mb-2">
                <PieChartIcon className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Memory</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">{(Math.random() * 5 + 45).toFixed(2)} MB</span>
              </div>
              <div className="mt-2 text-xs text-white/60 font-medium">
                Beats <span className="text-white">73.12%</span> 🟢
              </div>
            </div>
          </div>

          {/* DISTRIBUTION CHART */}
          <div className="bg-[#262626] p-8 rounded-lg relative overflow-hidden border border-white/5">
             <div className="flex items-end justify-between h-48 gap-2 pt-8">
                {[10, 80, 40, 20, 10, 15, 20, 25, 30, 20, 15, 10].map((h, i) => (
                   <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                      <div 
                        className={`w-full rounded-t-sm transition-all duration-300 cursor-pointer ${i === 1 ? 'bg-[#2db55d]' : 'bg-[#3e3e3e] hover:bg-[#4e4e4e]'}`} 
                        style={{height: `${h}%`}}
                      >
                         <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-[#3a3a3a] text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity border border-white/10 shadow-xl">
                            0.27% of solutions used {i+1}ms
                         </div>
                      </div>
                      <span className="text-[10px] text-white/30 font-mono">{i+1}ms</span>
                   </div>
                ))}
             </div>
             {/* USER PIN MARKER */}
             <div className="absolute left-[13.5%] top-[15%] flex flex-col items-center animate-bounce">
                <div className="w-8 h-8 rounded-full border-4 border-[#2db55d] bg-blue-500 shadow-xl z-20 overflow-hidden flex items-center justify-center">
                   <div className="w-full h-full bg-blue-500"></div>
                </div>
             </div>
          </div>

          {!isAccepted && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-red-500/30">
                <div className="px-4 py-2 bg-red-500/10 border-b border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider flex justify-between">
                  <span>Actual Output</span>
                  <span className="text-red-400/50">Wrong Answer</span>
                </div>
                <pre className="p-4 text-xs font-mono text-red-200/80 overflow-auto max-h-32 whitespace-pre-wrap">
                  {result.output || "No output"}
                </pre>
              </div>

              <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-green-500/30">
                <div className="px-4 py-2 bg-green-500/10 border-b border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                  Expected Output
                </div>
                <pre className="p-4 text-xs font-mono text-green-200/80 overflow-auto max-h-32 whitespace-pre-wrap">
                  {result.expected}
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-[#262626] flex justify-end gap-3 border-t border-white/5">
          <button className="btn btn-ghost text-white/40 hover:bg-white/5 border-none" onClick={onClose}>Close</button>
          <button className="btn bg-[#2db55d] border-none text-white hover:bg-[#269a4f] px-8" onClick={onClose}>Finish</button>
        </div>
      </div>
      <div className="modal-backdrop bg-black/90 backdrop-blur-md" onClick={onClose}></div>
    </div>
  );
}

export default SubmissionResultModal;
