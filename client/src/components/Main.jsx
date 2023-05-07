import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import BoardCategories from "./BoardCategories";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PrivacyPolicy from "./infoLinks/PrivacyPolicy";
import TermsOfService from "./infoLinks/TermsOfService";
import ShippingRefundPolicy from "./infoLinks/ShippingRefundPolicy";
import ContactUs from "./infoLinks/ContactUs";
import AboutUs from "./infoLinks/AboutUs";
import LoginModel from "./LoginModel";

const Main = () => {
  const [modalOn, toggleModal] = useState(false);

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <LoginModel modalOn={modalOn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardcategories" element={<BoardCategories />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/shippingandrefund" element={<ShippingRefundPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
