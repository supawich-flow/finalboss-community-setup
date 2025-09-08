import Gekko from "../../../assets/gekko.png";
import Yoru from "../../../assets/yoru.png";
import { FaCalendarAlt, FaGamepad, FaUserTag, FaVideo } from "react-icons/fa";

export default function WeeklyHighlight() {
  return (
    <div className="overflow-hidden relative w-full h-66 bg-gradient-to-r from-[#2D2D2D] to-[#222222] rounded-3xl shadow-lg p-10">
      <div>
        <div className="flex gap-5">
          <div className="w-full md:w-1/3">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/L0MGkZ5Iebs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 text-white">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-white drop-shadow-sm">
              <FaVideo className="text-[#E03E3E]" />
              <span className="text-white">Weekly Highlight</span>
            </h2>
            <p className="mb-4 text-zinc-300 leading-relaxed">
              เพลย์สุดเดือดจากผู้เล่น <span className="text-white font-medium">Bomburdy</span> ในสัปดาห์นี้
              <br />
              <span className="text-zinc-400 font-light">ห้ามพลาดกับช็อตโคตรเทพที่คุณต้องดูซ้ำ!</span>
            </p>
            <p className="flex items-center gap-2 text-zinc-400 mb-1">
              <FaCalendarAlt className="text-zinc-400 text-sm" />
              <span className="font-medium text-zinc-300">วันที่:</span>
              <span className="text-white">28 ส.ค. 2025</span>
            </p>

            <p className="flex items-center gap-2 text-zinc-400 mb-1">
              <FaGamepad className="text-zinc-400 text-sm" />
              <span className="font-medium text-zinc-300">ผู้เล่น:</span>
              <span className="text-white">Bomburdy</span>
            </p>

            <p className="flex items-center gap-2 text-zinc-400">
              <FaUserTag className="text-zinc-400 text-sm" />
              <span className="font-medium text-zinc-300">ชื่อในเกม:</span>
              <span className="text-white">บอม</span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img className="absolute right-0 translate-y-40 translate-x-10 bottom-0 h-100 object-contain" src={Yoru} alt="" />
      </div>
      <div className="">
        <img className="absolute right-0 translate-y-40 translate-x-[-70px] bottom-0 h-90 object-contain" src={Gekko} alt="" />
      </div>
    </div>
  );
}


