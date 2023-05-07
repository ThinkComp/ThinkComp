import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col mx-10 my-10">
      <h1 className="mx-auto font-black text-3xl text-black/70">
        <u>About Us</u>
      </h1>
      <div className="flex flex-col gap-2 text-sm mt-6 text-black/70">
        <span>
          Welcome to Thinkcomp, your one-stop-shop for all your electronics and mechanical needs! At Thinkcomp, we are dedicated
          to providing our customers with high-quality components, services, and programming solutions to help them achieve their
          goals.
        </span>
        <span>
          Thinkcomp was founded by two individuals, Ashish Mishra and Justin Jernaus George, who had previously operated separate
          companies in the industry. Ashish comes from Sna Sistec Private Limited, a company that specializes in automation and
          R&D domains for various government and private organizations. Sna Sistec has an office in Toronto, Canada, and four
          offices across India. Justin comes from General Machine Tools, a company with over 30 years of experience in mechanical
          heavy machinery fabrication and 3D printing services in India. Together, Ashish and Justin saw an opportunity to fill a
          gap in the market and provide a one-stop-shop for customers looking for electronic components, mechanical components,
          laser cutting services, 3D printing services, and programming solutions.
        </span>
        <span>
          {" "}
          At Thinkcomp, we offer a wide range of products and services to meet the needs of our diverse customer base. Our
          electronics components include items such as sensors, connectors, resistors, capacitors, and microcontrollers, to name a
          few. Our mechanical components range from nuts and bolts to motors and gears, and everything in between. Our laser
          cutting services provide precision cutting for various materials such as acrylic, wood, and metal. Our 3D printing
          services use advanced technology to produce high-quality parts quickly and efficiently. Finally, our programming
          solutions can help you with everything from simple programming tasks to complex custom software development.
        </span>{" "}
        <span>
          {" "}
          We understand that quality and reliability are crucial when it comes to the products and services we offer. That's why
          we have a strict quality control process in place to ensure that our customers receive only the highest quality
          components and services. We also have a 7-day refund and replacement policy against manufacturing defects to give our
          customers peace of mind.
        </span>
        <span>
          {" "}
          At Thinkcomp, we are committed to providing our customers with exceptional service and support. Our knowledgeable and
          experienced team is always available to answer any questions and provide assistance whenever needed. Whether you are a
          hobbyist, a student, an engineer, or a business owner, we are here to help you achieve your goals and bring your ideas
          to life.{" "}
        </span>
        <span>
          {" "}
          Thank you for choosing Thinkcomp as your trusted partner in electronics and mechanical components, laser cutting
          services, 3D printing services, and programming solutions. We look forward to serving you!
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
