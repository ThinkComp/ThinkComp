import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";

const HomeProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    await axios.post("/api/v1/cart", { productId: product._id }).then(() => {
      alert('item added to the cart');
      dispatch({ type: "ADD_TO_CART" });
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="mx-6">
      <div className="relative flex flex-col items-center">
        <img src={product.image?.url} className="h-[13rem] w-full object-contain" />
        <span className="text-white bg-[#f14705] rounded p-2 text-xs absolute top-1 right-1">-{product.discount}%</span>
        <div className="flex text-lg gap-4">
          <i class="uil uil-shopping-bag" onClick={handleAddToCart}></i>
          <i class="uil uil-eye"></i>
          <i class="uil uil-heart"></i>
          <i class="uil uil-chart"></i>
        </div>
      </div>
      <hr className="my-2" />
      <div>
        <div className="flex justify-between w-[14rem]">
          <span className="font-bold text-[#9abc57]">Rs. {product.offerPrice}</span>
          <s className="font-bold text-black/50 text-md">Rs. {product.orignalPrice}</s>
          <span className="text-[#dc4931] text-sm font-semibold">{product.discount}% off</span>
        </div>
        <h1 className="my-2 font-medium text-[#0271de]">{product.name}</h1>
        <StarRatings
          rating={product.rating}
          starRatedColor="#fcb800"
          numberOfStars={5}
          starDimension="1.2rem"
          starSpacing="2px"
        />
      </div>
    </div>
  );
};

export default HomeProductCard;
