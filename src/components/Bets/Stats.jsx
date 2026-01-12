import {
  TrendingUp,
  DollarSign,
  Target,
} from "lucide-react";

function Stats({ balance, bets, upcomingRaces }) {
  const potentialWin = Object.entries(bets).reduce((acc, [key, amount]) => {
    const [raceId, participantId] = key.split("-");
    const race = upcomingRaces.find((r) => r.id === parseInt(raceId));
    const participant = race?.participants.find(
      (p) => p.id === parseInt(participantId)
    );
    return acc + amount * (participant?.odds || 1);
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-100">Available Balance</span>
          <DollarSign className="w-5 h-5" />
        </div>
        <div className="text-3xl font-bold">${balance.toLocaleString()}</div>
      </div>
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-purple-100">Active Bets</span>
          <Target className="w-5 h-5" />
        </div>
        <div className="text-3xl font-bold">{Object.keys(bets).length}</div>
      </div>
      <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-yellow-100">Potential Win</span>
          <TrendingUp className="w-5 h-5" />
        </div>
        <div className="text-3xl font-bold">${potentialWin.toFixed(0)}</div>
      </div>
    </div>
  );
}
