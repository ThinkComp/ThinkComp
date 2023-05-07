import React from "react";
import Logo from "../assets/register-logo.png";
import GoogleLogo from "../assets/google-logo.png";
import FacebookLogo from "../assets/facebook-logo.png";

const LoginModel = ({ modalOn }) => {
  return (
    <div
      className={`z-20 fixed flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/[0.4] ${
        !modalOn && "hidden"
      }`}
    >
      <div className=" bg-white p-4 md:p-8 rounded flex items-center">
        <img src={Logo} className="w-[20rem] object-contain" />
        <div className="w-[3px] bg-gray-100 h-[30rem] mx-10"></div>
        <div className="w-[30rem] flex flex-col items-center gap-6">
          <input
            type="email"
            placeholder="Email"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
          <button className="font-bold bg-[#fcb800] px-4 py-3 w-1/2 rounded-xl text-black/70 text-md xl:text-xl my-4">
            NEXT
          </button>
          <div className="flex gap-16">
            <img src={GoogleLogo} className="w-[4rem] object-contain" />
            <img src={FacebookLogo} className="w-[3rem] object-contain" />
          </div>
          <a className="text-[#fcb800] text-xs cursor-pointer font-semibold" href="/register">
            CREATE AN ACCOUNT WITH THINKCOMP.COM
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
