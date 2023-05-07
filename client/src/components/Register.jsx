import React from "react";
import Logo from "../assets/register-logo.png";

const Register = () => {
  return (
    <div className="flex items-center px-16 py-16 justify-evenly">
      <img src={Logo} className="w-[16rem] xl:w-[20rem] object-contain" />
      <div className="w-[3px] bg-gray-100 h-[30rem] mx-10"></div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-black text-3xl text-black/70">
          <u>REGISTRATION</u>
        </h1>
        <div className="flex gap-8">
          <input
            type="text"
            placeholder="First Name"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
        />
        <div className="flex gap-8">
          <input
            type="password"
            placeholder="Password"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
        </div>
        <button className="font-bold bg-[#fcb800] px-4 py-3 w-1/2 rounded-xl text-black/70 text-md xl:text-xl my-4">
          GET OTP
        </button>
      </div>
    </div>
  );
};

export default Register;
