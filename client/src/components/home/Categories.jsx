import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [cateogries, setCategories] = useState(null);
  const getCategories = async () => {
    await axios
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="my-20 px-8 xl:px-12">
      <h3 className="text-2xl font-semibold text-black/70">Categories</h3>
      <hr className="mt-2 mb-10 h-[2px] border-0 bg-gray-100" />
      <div className="grid grid-cols-4 xl:grid-cols-6 gap-8">
        {cateogries?.map((cateogry) => (
          <div className="border-4 border-gray-100 rounded-3xl px-4 py-3 flex flex-col">
            <img src={cateogry.image?.url} className="w-[7rem] xl:w-[9rem] m-auto" />
            <span className="flex text-center font-extrabold text-xl text-black/80 mt-3 mx-auto">{cateogry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
