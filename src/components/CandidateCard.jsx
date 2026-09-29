const styles = {
  emerald: {
    badge: "bg-emerald-400 text-slate-950",
    text: "text-emerald-400",
    button: "bg-emerald-400 hover:bg-emerald-300 focus-visible:outline-emerald-300",
    border: "border-emerald-400",
    shadow: "shadow-emerald-500/20",
  },
  amber: {
    badge: "bg-amber-400 text-slate-950",
    text: "text-amber-400",
    button: "bg-amber-400 hover:bg-amber-300 focus-visible:outline-amber-300",
    border: "border-amber-400",
    shadow: "shadow-amber-500/20",
  },
  sky: {
    badge: "bg-sky-400 text-slate-950",
    text: "text-sky-400",
    button: "bg-sky-400 hover:bg-sky-300 focus-visible:outline-sky-300",
    border: "border-sky-400",
    shadow: "shadow-sky-500/20",
  },
};

export default function CandidateCard({ candidate, votes, isLeading, onVote }) {
  const style = styles[candidate.accent];

  return (
    <article
      className={`rounded-3xl border bg-slate-900 p-6 text-center transition duration-300 ${
        isLeading
          ? `-translate-y-1 ${style.border} shadow-xl ${style.shadow}`
          : "border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className={`mx-auto grid size-16 place-items-center rounded-2xl text-2xl font-black ${style.badge}`}>
        {candidate.badge}
      </div>

      <h2 className="mt-5 text-xl font-bold">{candidate.name}</h2>

      <p className={`mt-1 h-5 text-sm font-semibold ${style.text}`}>
        {isLeading ? "Leading" : " "}
      </p>

      <p className={`my-5 text-6xl font-black ${style.text}`}>{votes}</p>

      <button
        onClick={onVote}
        className={`w-full rounded-xl px-4 py-3 font-bold text-slate-950 transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${style.button}`}
      >
        Vote for {candidate.name}
      </button>
    </article>
  );
}
