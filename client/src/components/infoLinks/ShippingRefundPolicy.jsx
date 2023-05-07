import React from "react";

const ShippingRefundPolicy = () => {
  return (
    <div className="flex flex-col px-10 py-12 gap-6">
      <h1 className="mx-auto font-black text-3xl text-black/70">
        <u>Shipping & Refund Policies</u>
      </h1>
      <span className="text-lg text-gray-600">
        Thank you for choosing to shop with Thinkcomp.in. We are committed to providing you with the best possible shopping
        experience. This document outlines our shipping and refund policies, which we have put in place to ensure that our
        customers receive their orders promptly and to address any issues that may arise.
      </span>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-black text-black/70 mb-6">Shipping Policy:</h1>
          <div className="ml-6 flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Order Processing time:</h1>
              <span className="text-lg text-black/70">
                We strive to process and ship all orders as quickly as possible. Our processing time is usually between 1-2
                business days for most orders. Please note that our processing time may be longer during peak shopping periods or
                due to unforeseen circumstances.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Shipping Methods:</h1>
              <span className="text-lg text-black/70 mb-4">
                We offer a variety of shipping methods to meet your needs. The shipping options available to you will depend on
                the items in your order, your shipping address, and the shipping carrier.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Shipping Charges:</h1>
              <span className="text-lg text-black/70 mb-4">
                Shipping charges will be calculated based on the weight of your order, the shipping method you choose, and your
                shipping address. You will see the shipping charges on the checkout page before you submit your order.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Shipping Carrier:</h1>
              <span className="text-lg text-black/70 mb-4">
                We use a variety of shipping carriers, including FedEx, DHL, and local couriers, to ensure that your order is
                delivered to you as quickly and safely as possible.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Delivery Time:</h1>
              <span className="text-lg text-black/70 mb-4">
                Delivery times will vary depending on your shipping address and the shipping method you choose. Generally, orders
                shipped within India will be delivered within 3-7 business days. International orders may take longer to arrive
                depending on the destination country.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Tracking your order:</h1>
              <span className="text-lg text-black/70 mb-4">
                Once your order has been shipped, you will receive a tracking number by email or SMS. You can use this tracking
                number to track your order on the shipping carrier's website.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Shipping Restrictions:</h1>
              <span className="text-lg text-black/70 mb-4">
                We currently ship within India and to select international countries. Please note that some items may not be
                eligible for international shipping due to legal restrictions or logistical limitations.
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-black text-black/70 mb-6">Refund Policy:</h1>
          <div className="ml-6 flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Eligibility for Refund:</h1>
              <span className="text-lg text-black/70">
                We offer a 7-day refund and replacement policy against manufacturing defects only. If you receive a defective or
                damaged item, you must notify us within 7 days of receipt of the product.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Return Process:</h1>
              <span className="text-lg text-black/70 mb-4">
                To initiate a return, please email us at support@thinkcomp.in with your order number and a description of the
                issue. Our support team will assist you in initiating the return process.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Return Shipping:</h1>
              <span className="text-lg text-black/70 mb-4">
                You are responsible for the cost of return shipping unless the item is being returned due to a manufacturing
                defect. We recommend using a trackable shipping method to ensure that the item is returned to us safely.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Refund Process:</h1>
              <span className="text-lg text-black/70 mb-4">
                Once we receive the returned item, we will inspect it to confirm that it is eligible for a refund or replacement.
                If the item is eligible, we will issue a refund to your original payment method or send a replacement product, as
                per your preference.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Refund Timeframe:</h1>
              <span className="text-lg text-black/70 mb-4">
                Refunds may take up to 7-10 business days to process, depending on your bank or credit card company's policies.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black/70 mb-3">Non-Eligibility for Refund:</h1>
              <span className="text-lg text-black/70 mb-4">
                Please note that we do not offer refunds for the following reasons:
              </span>
              <div className="flex flex-col ml-10 text-lg text-black/70 mb-4">
                <span>a. Change of mind</span>
                <span>b. Item not as expected</span>
                <span>c. Damage caused by misuse, mishandling, or accidents</span>
                <span>d. Items that have been tampered with or modified</span>
                <span>e. Items that have been used or installed</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-black text-black/70 mb-4">Conclusion:</h1>
          <span className="text-lg text-black/70">
            We hope that our shipping and refund policies provide you with the confidence to shop with us. If you have any
            questions or concerns, please do not hesitate to contact us at support@thinkcomp.in. Thank you for choosing
            Thinkcomp.in
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShippingRefundPolicy;
