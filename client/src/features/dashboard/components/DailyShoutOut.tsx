import Deadlock from "../../../assets/deadlock.png";
import { IoMdMegaphone } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function DailyShoutOut() {
  return (
    <div className="overflow-hidden relative w-full h-66 bg-gradient-to-r from-[#2D2D2D] to-[#222222] rounded-3xl shadow-lg py-5 px-6">
      <div className="flex items-center gap-2 text-white font-semibold mb-3 text-lg">
        <IoMdMegaphone className="text-xl"/> Daily Shoutout!
      </div>
      <div>
        <div className="text-base font-bold text-white">
          ยิงโหดสุดวันนี้คือ <span className="text-yellow-400">User_1</span>
        </div>

        <div className="text-sm text-zinc-300">ยิง top frag 8 เกมติด!</div>

        <div className="flex gap-4 text-sm text-zinc-400 pt-2 mb-6">
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <FaUser className="text-sm" />
            <span>
              Agent: <span className="text-white">Reyna</span>
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <MdDateRange className="text-sm" />
            <span>
              วันที่: <span className="text-white">28 ส.ค. 2025</span>
            </span>
          </div>
        </div>

        <div className="text-base font-bold text-white">
          ยิงหนักสุดวันนี้คือ <span className="text-yellow-400">User_2</span>
        </div>

        <div className="text-sm text-zinc-300">ยิง bottom frag 10 เกมติด!</div>

        <div className="flex gap-4 text-sm text-zinc-400 pt-2 mb-6">
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <FaUser className="text-sm" />
            <span>
              Agent: <span className="text-white">Sage</span>
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <MdDateRange className="text-sm" />
            <span>
              วันที่: <span className="text-white">28 ส.ค. 2025</span>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="absolute right-0 translate-y-45 translate-x-25 bottom-0 h-100 object-contain"
          src={Deadlock}
          alt=""
        />
      </div>
    </div>
  );
}
 

