import React from "react";
import Logo from "../../assets/logo.png";

const DashboardHeader = () => {
  return (
    <div className="bg-[#fcb800] divide-y divide-black/30">
      <div className="flex items-center justify-between px-5 xl:px-12 py-5">
        <img src={Logo} className="w-[10rem] xl:w-[13rem]" />
        <div className="h-10 flex items-center w-full ml-6 xl:ml-16 mr-10">
          <select className="h-full px-6 xl:px-12 border border-r-2">
            <option selected>All</option>
          </select>
          <input type="text" placeholder="I am shopping for..." className="h-full px-4 w-full" />
          <button className="bg-black font-semibold text-sm rounded-r-[3px] text-white h-full px-6 py-2 flex items-center justify-center">
            Search
          </button>
        </div>
        <div className="flex gap-10 ml-20">
          <i class="uil uil-bell text-4xl"></i>
          <div className="flex items-center gap-2">
            <i class="uil uil-user text-4xl"></i>
            <span className="text-md">Logout</span>
          </div>
        </div>
      </div>
      <div className="flex gap-16 py-2 px-6 text-xs justify-end items-center">
        <span>INVENTORY</span>
        <span>ADD PRODUCT</span>
        <span>SALES</span>
        <span>PURCHASED</span>
        <span>USERS</span>
        <span className="bg-black text-white rounded px-6 py-2">DEVELOPER PROJECTS</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
