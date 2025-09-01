import Gekko from "../../assets/gekko.png"
import Yoru from "../../assets/yoru.png"

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
            <h2 className="text-xl font-bold mb-2">
              🎥 คลิปไฮไลต์ประจำสัปดาห์
            </h2>
            <p className="mb-4">
              ชมคลิปการเล่นที่น่าตื่นเต้นที่สุดของวันนี้ <br />
              จากผู้เล่น Bomurdy
            </p>
            <p>
              <strong>วันที่:</strong> 28 ส.ค. 2025
            </p>
            <p>
              <strong>ผู้เล่น:</strong> Bomburdy
            </p>
            <p>
              <strong>ชื่อเล่น:</strong> บอม
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="absolute right-0 translate-y-40 translate-x-10 bottom-0 h-100 object-contain"
          src={Yoru}
          alt=""
        />
      </div>
      <div className="">
        <img
          className="absolute right-0 translate-y-40 translate-x-[-70px] bottom-0 h-90 object-contain"
          src={Gekko}
          alt=""
        />
      </div>
    </div>
  );
}
