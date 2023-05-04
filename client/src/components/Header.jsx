import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
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
        <div className="flex items-center gap-5 xl:gap-10 text-4xl text-black/70">
          <div className="relative">
            <div className="absolute bg-black rounded-full px-2 py-[3px] text-white text-xs -right-1 -bottom-1">0</div>
            <i class="uil uil-chart"></i>
          </div>
          <div className="relative">
            <div className="absolute bg-black rounded-full px-2 py-[3px] text-white text-xs -right-1 -bottom-1">0</div>
            <i class="uil uil-heart"></i>
          </div>
          <div className="relative">
            <div className="absolute bg-black rounded-full px-2 py-[3px] text-white text-xs -right-1 -bottom-1">0</div>
            <i class="uil uil-shopping-bag"></i>
          </div>
          <div className="flex items-center gap-2">
            <i class="uil uil-user"></i>
            <div className="flex flex-col text-sm font-extrabold">
              <span>Login</span>
              <span>Register</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 px-5 xl:px-12 py-2">
        <div className="flex items-center gap-1">
          <i class="uil uil-bars text-black/50 text-2xl"></i>
          <span className="text-xs xl:text-sm font-bold">SHOP BY CATEGORIES</span>
        </div>
        <div className="flex items-center gap-10 xl:gap-16 font-semibold text-xs">
          <span>HOME</span>
          <span>SHOP</span>
          <span>NEW ARRIVALS</span>
          <span>SERVICES</span>
          <span>B2B</span>
          <span>SUPPORT</span>
        </div>
        <div className="flex items-center gap-10 xl:gap-12 font-semibold text-xs">
          <span>MY ORDERS</span>
          <span>MY ACCOUNT</span>
          <div className="bg-black px-2 py-3 text-white font-bold flex text-center">
            <span>CONTACT A DEVELOPER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
