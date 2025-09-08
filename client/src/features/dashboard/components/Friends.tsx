import unknownProfile from "../../../assets/Unknown_User.jpg";
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function Friends() {
  return (
    <div className="py-5 px-10 w-full h-142 bg-[#2D2D2D] rounded-3xl shadow-lg">
      <div className="space-y-5">
        <p className="font-bold text-[#AAAAAA] text-xs mb-5">FRIENDS (3)</p>
        <div className="flex item-center justify-between">
          <div className="flex item-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-md"
              src={unknownProfile}
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="text-white font-bold text-base">Friend_1</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-white font-light text-xs">Active</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <IoChatbubbleEllipses 
            className="text-white text-xl cursor-pointer" />
          </div>
        </div>

        <div className="flex item-center justify-between">
          <div className="flex item-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-md"
              src={unknownProfile}
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="text-white font-bold text-base">Friend_2</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <p className="text-white font-light text-xs">Away</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <IoChatbubbleEllipses 
            className="text-white text-xl cursor-pointer" />
          </div>
        </div>

        <div className="flex item-center justify-between">
          <div className="flex item-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-md"
              src={unknownProfile}
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-bold text-base">Friend_3</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <p className="text-gray-300 font-light text-xs">Offline</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <IoChatbubbleEllipses 
            className="text-gray-300 text-xl cursor-pointer" />
          </div>
        </div>

        <div className="flex item-center justify-between">
          <div className="flex item-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-md"
              src={unknownProfile}
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-bold text-base">Friend_4</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <p className="text-gray-300 font-light text-xs">Offline</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <IoChatbubbleEllipses
            className="text-gray-300 text-xl cursor-pointer" />
          </div>
        </div>

        <div className="flex item-center justify-between">
          <div className="flex item-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover shadow-md"
              src={unknownProfile}
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-bold text-base">Friend_5</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <p className="text-gray-300 font-light text-xs">Offline</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <IoChatbubbleEllipses 
            className="text-gray-300 text-xl cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
}


