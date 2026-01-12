import {
  Trophy,
} from "lucide-react";

function HeroBets() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="w-12 h-12 text-yellow-300" />
          <h1 className="text-4xl md:text-5xl font-bold">
            Marble Racing Championship
          </h1>
        </div>
        <p className="text-xl text-purple-100 mb-6">
          Place your bets on the world's most rigged marble competitions!(and lose surely)
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <div className="text-2xl font-bold text-yellow-300">3</div>
            <div>Live Races</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <div className="text-2xl font-bold text-yellow-300">48</div>
            <div>Active Marbles</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
            <div className="text-2xl font-bold text-yellow-300">12.5K</div>
            <div>Total Bets Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}
