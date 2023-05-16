import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PromotionPoster from "./PromotionPoster";
import Products from "./Products";

const Dashboard = () => {
  return (
    <div className="mx-10">
      <PromotionPoster />
      <Products />
    </div>
  );
};

export default Dashboard;
