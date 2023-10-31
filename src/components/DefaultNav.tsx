import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
const DefaultNav: React.FC = () => {
  const [logedin, setLogedin] = useState<boolean>(true);
  return (
    <div className="fixed top-0 w-full h-auto px-3 md:px-5  bg-white flex flex-row items-center z-50">
      <a className="w-44 mx-2 my-2 flex items-center" href="/">
        <img src="/img/OneStore logo.svg" alt="" className="w-auto h-auto" />
      </a>

      <div className=" w-4/5 mx-auto md:mx-4 px-1 flex flex-row ">
        <span className="w-auto mx-auto cursor-pointer"></span>
        <div className="w-auto mx-4 flex flex-col items-center cursor-pointer">
          <h1 className="w-auto mx-auto flex flex-row items-center">
            <MdPersonOutline size={32} className=" text-slate-700" />
            <span className="text-xs md:text-sm text-black font-roboto font-thin">
              Admin Samuel
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DefaultNav;
