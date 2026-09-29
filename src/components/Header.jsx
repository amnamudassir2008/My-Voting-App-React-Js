export default function Header({ total }) {
  return (
    <header className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            React + Tailwind CSS
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
            Voting App
          </h1>
          <p className="mt-2 max-w-xl text-slate-400">
            Vote for your candidate and see the live vote count.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Total Votes
          </p>
          <p className="mt-1 text-3xl font-black text-white">{total}</p>
        </div>
      </div>
    </header>
  );
}
