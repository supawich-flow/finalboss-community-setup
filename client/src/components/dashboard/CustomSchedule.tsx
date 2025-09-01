import { FaCircleArrowRight } from "react-icons/fa6";
import Jett from "../../assets/jett_agent.png";

export default function CusTomSchedule() {
  return (
    <div className="relative flex overflow-hidden justify-between w-full h-60 py-6 pl-8 bg-gradient-to-r from-[#882525] to-[#601212] rounded-3xl shadow-lg">
      <div className="space-y-6">
        <h1 className="text-xs font-bold text-white">CUSTOM SCHEDULE</h1>
        <div>
          <p className="text-white font-bold text-4xl">
            ดูเหมือนจะยังไม่มีใครนัดเล่น <br />
            Custom Game เลยนะ 🙄
          </p>
        </div>
        <button className="flex items-center py-2 cursor-pointer hover:bg-[#601212] hover:text-white transition-all duration-200 ease-in-out rounded-3xl px-4 justify-center text-center gap-2 text-[#992D2D] text-2xl bg-white">
          <span className="relative top-[-3px] font-bold leading-none">
            นัดเลย!
          </span>
          <FaCircleArrowRight className="text-3xl" />
        </button>
      </div>

      <div>
        <img className="h-90" src={Jett} alt="" />
      </div>
    </div>
  );
}
