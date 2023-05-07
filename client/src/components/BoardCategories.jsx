import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import axios from "axios";
import HomeProductCard from "./home/HomeProductCard";

const BoardCategories = () => {
  const [boards, setBoards] = useState(null);
  const getBoards = async () => {
    await axios
      .get("/board")
      .then((res) => setBoards(res.data))
      .catch((error) => console.log(error));
  };

  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    await axios
      .get("/product/offer")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBoards();
    fetchProducts();
  }, []);

  return (
    <div className="px-10 py-6">
      <h3 className="text-2xl font-semibold text-black/70">Development Boards Categories</h3>
      <hr className="mt-2 mb-4 h-[2px] border-0 bg-gray-100" />
      <span className="text-sm text-gray-500">
        Welcome to our development boards category, where you can find the perfect motherboard for your project. We offer a wide
        range of development boards from leading brands and generic options, catering to both beginners and experts. Find detailed
        descriptions and datasheets on each product page to help you make an informed decision. Join our community of innovators
        and makers by sharing your projects and ideas. Shop now and bring your project to life!
      </span>
      <hr className="mt-2 mb-4 h-[2px] border-0 bg-gray-100" />
      <div className="grid grid-cols-4 xl:grid-cols-6 gap-8 mt-6">
        {boards?.map((board) => (
          <div className="border-4 border-gray-100 rounded-3xl px-4 py-3 flex flex-col">
            <img src={board.image?.url} className="w-[7rem] xl:w-[9rem] m-auto" />
            <span className="flex text-center font-extrabold text-xl text-black/80 mt-3 mx-auto">{board.name}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-black/70 mt-10">Best Selling Product of the Cateogry</h3>
      <hr className="mt-2 mb-4 h-[2px] border-0 bg-gray-100" />
      <div className="flex hide-scrollbar overflow-x-scroll mb-6">
        {products?.map((product) => (
          <HomeProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default BoardCategories;
