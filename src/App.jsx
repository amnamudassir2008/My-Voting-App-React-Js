import { useState } from "react";
import Header from "./components/Header";
import CandidateCard from "./components/CandidateCard";
import ResetButton from "./components/ResetButton";

const initialCandidates = [
  { id: 1, name: "Candidate 1", badge: "01", accent: "emerald" },
  { id: 2, name: "Candidate 2", badge: "02", accent: "amber" },
  { id: 3, name: "Candidate 3", badge: "03", accent: "sky" },
];

export default function App() {
  const [votes, setVotes] = useState({ 1: 0, 2: 0, 3: 0 });

  const total = Object.values(votes).reduce((sum, value) => sum + value, 0);
  const top = Math.max(...Object.values(votes));

  const addVote = (id) => {
    setVotes((current) => ({
      ...current,
      [id]: current[id] + 1,
    }));
  };

  const resetVotes = () => setVotes({ 1: 0, 2: 0, 3: 0 });

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Header total={total} />

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {initialCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              votes={votes[candidate.id]}
              isLeading={top > 0 && votes[candidate.id] === top}
              onVote={() => addVote(candidate.id)}
            />
          ))}
        </section>

        <ResetButton onReset={resetVotes} disabled={total === 0} />
      </div>
    </main>
  );
}
