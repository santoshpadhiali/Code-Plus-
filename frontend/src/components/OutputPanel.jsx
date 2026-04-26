function OutputPanel({ output, expected }) {
  const isWrongAnswer =
    output?.success &&
    expected &&
    output.output.trim().toLowerCase() !== expected.trim().toLowerCase();

  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm flex justify-between items-center">
        <span>Output</span>
        {isWrongAnswer && <span className="text-error text-xs">Mismatch with expected output</span>}
      </div>
      <div className="flex-1 overflow-auto p-4">
        {output === null ? (
          <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>
        ) : output.success ? (
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase font-bold text-base-content/40 mb-1">Actual</p>
              <pre
                className={`text-sm font-mono whitespace-pre-wrap ${
                  isWrongAnswer ? "text-error" : "text-success"
                }`}
              >
                {output.output}
              </pre>
            </div>

            {isWrongAnswer && (
              <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                <p className="text-[10px] uppercase font-bold text-success/50 mb-1">Expected</p>
                <pre className="text-sm font-mono text-success/80 whitespace-pre-wrap">
                  {expected}
                </pre>
              </div>
            )}
          </div>
        ) : (
          <div>
            {output.output && (
              <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
                {output.output}
              </pre>
            )}
            <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
export default OutputPanel;
