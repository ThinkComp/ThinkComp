import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CreateProductModal from "./CreateProductModal";

const Products = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    await axios
      .get("/api/v1/product/offer")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  const [modalOn, toggleModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="my-[6rem]">
      <CreateProductModal modalOn={modalOn} toggleModal={toggleModal} />
      <div className="flex">
        <h3 className="text-xl font-medium text-black/70">Deals</h3>
        <div className="ml-[10rem] rounded-lg bg-[#f14705] px-4 py-1 text-white text-lg">
          <span className="mr-10">Start Date:</span>
          <span>End Date:</span>
        </div>
      </div>
      <hr className="mt-2 mb-10 h-[2px] border-0 bg-gray-100" />
      <div className="flex hide-scrollbar overflow-x-scroll">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
        <div className="w-[15rem] bg-gray-100 rounded relative flex cursor-pointer" onClick={() => toggleModal(true)}>
          <div className="h-2 w-16 bg-yellow-300/60 m-auto"></div>
          <div className="h-16 w-2 bg-yellow-300/60 m-auto absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
