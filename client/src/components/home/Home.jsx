import React from "react";
import Header from "../layout/Header";
import Promotion from "./Promotion";
import HomeProducts from "./HomeProducts";
import Categories from "./Categories";
import Services from "./Services";
import FeaturedBrands from "./FeaturedBrands";
import Contact from "./Contact";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <Promotion />
      <HomeProducts />
      <Categories />
      <Services />
      <FeaturedBrands />
      <Contact />
    </div>
  );
};

export default Home;
