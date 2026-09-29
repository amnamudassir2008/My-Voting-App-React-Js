export default function ResetButton({ onReset, disabled }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onReset}
        disabled={disabled}
        className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Reset Votes
      </button>
    </div>
  );
}
