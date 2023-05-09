import React from "react";
import MapImg from "../../assets/map.png";

const Contact = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-center mx-24">
        <h1 className="font-black text-3xl text-black/70 mb-6">
          <u>GET IN TOUCH</u>
        </h1>
        <input
          type="text"
          placeholder="NAME"
          className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none my-2 w-full"
        />
        <div className="flex">
          <input
            type="text"
            placeholder="PHONE"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none my-2 mr-4 w-full"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none my-2 w-full"
          />
        </div>
        <textarea
          placeholder="MESSAGE..."
          className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none resize-none my-2 w-full"
        ></textarea>
        <button className="font-bold bg-[#fcb800] px-4 py-3 w-1/2 rounded-xl text-black/70 text-md xl:text-xl my-4">SEND</button>
      </div>
      <img src={MapImg} className="w-1/2 mt-auto" />
    </div>
  );
};

export default Contact;
