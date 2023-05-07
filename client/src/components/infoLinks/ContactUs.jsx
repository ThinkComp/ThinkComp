import React from "react";

const ContactUs = () => {
  return (
    <div className="px-8 py-10">
      <h1 className="text-black/70 text-2xl font-semibold">Contact Us</h1>
      <hr className="h-[2px] bg-gray-100 border-0 my-4" />
      <div className="flex divide-x-4 divide-gray-100">
        <div>
          <span className="text-black/70 text-sm">
            Thank you for your interest in contacting us! If you have any questions or concerns regarding our products or
            services, please fill out the contact form below and we will get back to you as soon as possible. Please provide us
            with as much detail as possible so that we can better understand your query and provide you with a satisfactory
            response. We value your feedback and are committed to providing you with exceptional customer service. Thank you for
            choosing Thinkcomp.in, we look forward to hearing from you!
          </span>
          <div className="flex flex-col items-center mx-10 xl:mx-24">
            <input
              type="text"
              placeholder="NAME"
              className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none my-2 w-full"
            />
            <div className="flex">
              <input
                type="text"
                placeholder="PHONE"
                className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none my-2 mr-4 w-full"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none my-2 w-full"
              />
            </div>
            <textarea
              placeholder="MESSAGE..."
              className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 placeholder:text-[#e0d5c8] outline-none resize-none my-2 w-full"
            ></textarea>
            <button className="font-bold bg-[#fcb800] px-4 py-3 w-1/2 rounded-xl text-black/70 text-md xl:text-xl my-4">
              SEND
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 pl-4">
          <span className="text-black/70 text-sm">
            At Thinkcomp.in, we are always ready to help you with any questions or concerns you may have. You can contact us by
            calling our customer care number during business hours and on business days, or you can send us an email at the email
            address provided on our website. Our customer service representatives will get back to you as soon as possible and
            provide you with the assistance you require. We value your feedback and are committed to providing you with
            exceptional customer service. Thank you for choosing Thinkcomp.in, we look forward to hearing from you!
          </span>
          <h1 className="font-black text-3xl text-black/70">+917566767501/+919003536228</h1>
          <h1 className="font-black text-3xl text-black/70">support@thinkcomp.in</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
