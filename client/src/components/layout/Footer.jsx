import React from "react";
import Logo from "../../assets/footer-logo.png";
import GooglePlay from "../../assets/google-play.png";
import Appstore from "../../assets/appstore.png";

const Footer = () => {
  return (
    <div className="flex bg-black text-white gap-8 px-8 py-8">
      <div className="flex flex-col items-start w-[25rem] gap-6">
        <img src={Logo} className="w-[18rem]" />
        <span>6-B, Sector F, Industrial Estate, Govindpura, Bhopal, Madhya Pradesh, India (462023)</span>
        <span>+917566767501/+919003536228</span>
      </div>
      <div className="flex flex-col items-center justify-end">
        <div className="flex gap-4 text-2xl">
          <i class="uil uil-facebook cursor-pointer"></i>
          <i class="uil uil-twitter cursor-pointer"></i>
          <i class="uil uil-instagram-alt cursor-pointer"></i>
          <i class="uil uil-linkedin cursor-pointer"></i>
        </div>
        <span className="text-xs font-bold mb-3">Copyright © 2023 Sna Sistec Private Limited All rights reserved.</span>
        <div className="flex gap-5">
          <a className="cursor-pointer" href="/privacypolicy">
            Privacy policy
          </a>
          <a className="cursor-pointer" href="/termsofservice">
            Terms of Service
          </a>
          <a className="cursor-pointer" href="/shippingandrefund">
            Shipping & Refund
          </a>
          <a className="cursor-pointer" href="/thinkcompcsr">
            Thinkcomp CSR
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[10rem] justify-end">
        <a className="cursor-pointer" href="/faq">
          FAQ
        </a>
        <a className="cursor-pointer" href="/contactus">
          Contact Us
        </a>
        <a className="cursor-pointer" href="/support">
          Support
        </a>
        <a className="cursor-pointer" href="/aboutus">
          About Us
        </a>
        <a className="cursor-pointer" href="/thinkcompb2b">
          Thinkcomp B2B
        </a>
      </div>
      <div className="w-[15rem] flex flex-col justify-center gap-3">
        <span className="font-bold">DOWNLOAD OUR APP</span>
        <div className="flex gap-3">
          <img src={GooglePlay} className="w-[5rem]" />
          <img src={Appstore} className="w-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
