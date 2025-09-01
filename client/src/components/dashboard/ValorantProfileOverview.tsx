import Phoenix from "../../assets/phoenix.png";
import rank from "../../assets/Radiant.png";

export default function ValorantProfileOverview() {
  return (
    <div className="relative overflow-hidden flex w-full h-66 bg-gradient-to-r from-[#2D2D2D] to-[#222222] rounded-3xl shadow-lg py-3 pl-6 text-white">
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Valorant Profile Overview
        </h3>
        <div className="flex items-center gap-3 mb-4">
          <img src={rank} alt="Bomburdy" className="w-15 h-15" />
          <div>
            <p className="font-bold text-white">Bomburdy</p>
            <p className="text-gray-400 text-sm">#1tap</p>
          </div>
        </div>

        <p className="flex items-center gap-2 text-base mb-2">
          🎮 Main Agents:
          <span className="font-semibold text-white"> Jett, Clove</span>
        </p>

        <p className="flex items-center gap-2 text-base mb-2">
          📊 KDA: <span className="font-semibold text-[#FFD700]">1.7</span>
        </p>

        <p className="flex items-center gap-2 text-base mb-2">
          🏆 Winrate: <span className="font-semibold text-[#FFD700]">70%</span>
        </p>

        <p className="flex items-center gap-2 text-base">
          📅 Last Match:
          <span className="font-semibold text-white"> 25 ส.ค. </span>
        </p>
      </div>
      <div className="">
        <img
          className="absolute right-0 translate-y-35 translate-x-15 bottom-0 h-90 object-contain"
          src={Phoenix}
          alt=""
        />
      </div>
    </div>
  );
}
