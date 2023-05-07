import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeProductCard from "./HomeProductCard";

const HomeProducts = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    await axios
      .get("/product/offer")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="my-20 px-8 xl:px-12">
      <div className="flex items-center gap-16">
        <h3 className="text-2xl font-semibold text-black/70">Deal of the day</h3>
        <span className="rounded-lg bg-[#f14705] px-4 py-1 text-white text-lg">
          End in: <span className="ml-6">12:18:40:15</span>
        </span>
      </div>
      <hr className="mt-2 mb-10" />
      <div className="flex hide-scrollbar overflow-x-scroll">
        {products?.map((product) => (
          <HomeProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
