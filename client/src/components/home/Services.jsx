import axios from "axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState(null);
  const getServices = async () => {
    await axios
      .get("/service")
      .then((res) => setServices(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <div className="my-20 px-8 xl:px-12">
      <h3 className="text-2xl font-semibold text-black/70">Services</h3>
      <hr className="mt-2 mb-10 h-[2px] border-0 bg-gray-100" />
      <div className="grid grid-cols-3 gap-8">
        {services?.map((service) => (
          <div className="border-4 border-gray-100 rounded-3xl px-4 py-3 flex items-center">
            <img src={service.image?.url} className="w-[7rem] xl:w-[10rem] object-contain" />
            <div className="flex flex-col items-center gap-3">
              <span className="flex text-center font-black text-xl xl:text-3xl text-black/80 mt-3">{service.name}</span>
              <button className="bg-[#fcb800] px-4 py-2 rounded-xl text-white font-extrabold hover:bg-[#cda128]">
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
