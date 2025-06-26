import React, { useState } from "react";
import Link from "next/link";
import { RxSlash } from "react-icons/rx";
import Image from "next/image";
import Ps5 from '../../public/assets/redpad.png';
import Speaker from '../../public/assets/speaker.png';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const cartItems = [
    {
      name: "PS5 Pad",
      quantity: 1,
      price: 650,
      image: Ps5
    },
    {
      name: "Speaker",
      quantity: 2,
      price: 120,
      image: Speaker
    }
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-16">

      <div className="flex items-center text-xs md:text-lg lg:text-sm">
        <Link href="/" className="text-gray-400">Home</Link>
        <RxSlash className="text-gray-400" />
        <Link href="/cart" className="text-gray-400">Cart</Link>
        <RxSlash className="text-gray-400" />
        <p>Checkout</p>
      </div>

      {/* Billing & Order Section */}
      <div className="py-10">
        <p className="font-medium text-xl md:text-3xl lg:text-2xl">Billing Details</p>
        <div className="flex flex-col lg:flex-row items-start py-5 md:py-10">
          {/* Billing Form */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              {["First Name", "Company Name", "Street Address", "Apartment, floor, etc. (optional)", "Town/City", "Phone Number", "Email Address"].map((label, idx) => (
                <div key={idx} className="flex flex-col gap-2 w-full lg:w-[80%]">
                  <label className="text-xs md:text-lg lg:text-sm text-gray-500">{label}*</label>
                  <input
                    type={label.includes("Email") ? "email" : "text"}
                    className="bg-[#F5F5F5] outline-none px-2 py-2 text-xs md:text-lg lg:text-sm"
                  />
                </div>
              ))}
              <div className="flex gap-2 items-start w-full lg:w-[80%]">
                <input type="checkbox" className="accent-[#8644DB]" />
                <p className="text-xs md:text-lg lg:text-sm">Save this information for faster check-out next time</p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="flex-1 flex flex-col items-start justify-between px-0 py-10 md:py-16 lg:py-0 lg:px-20">
            
            <div className="w-full">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 md:py-4 lg:py-3">
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt="checkout-img" className="w-[10%] md:w-[5%] lg:w-[10%] h-auto" />
                    <p className="text-xs md:text-lg lg:text-sm">{item.name}</p>
                  </div>
                  <p className="text-xs md:text-lg lg:text-sm">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            {/* Subtotal & Total */}
            <div className="flex justify-between py-2 md:py-4 text-xs md:text-lg lg:text-sm w-full border-b border-b-gray-300">
              <p>Subtotal:</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className="flex justify-between py-2 md:py-4 w-full border-b border-b-gray-300 text-xs md:text-lg lg:text-sm">
              <p>Shipping:</p>
              <p>Free delivery</p>
            </div>
            <div className="flex justify-between py-2 md:py-4 text-xs md:text-lg lg:text-sm w-full">
              <p>Total:</p>
              <p>${calculateTotal() + 20}</p>
            </div>

            {/* Payment Method - Radio Buttons */}
            <div className="w-full mt-3">
              <label className="text-xs md:text-lg lg:text-sm mb-2 block">Select Payment Method</label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-lg lg:text-sm">
                  <input
                    type="radio"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="accent-[#8644DB]"
                  />
                  Bank Transfer
                </label>
                <label className="flex items-center gap-2 text-xs md:text-lg lg:text-sm">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-[#8644DB]"
                  />
                  Card Payment
                </label>
              </div>
            </div>

            {/* Conditional Payment Info */}
            {paymentMethod === "bank" && (
              <div className="mt-5 text-sm md:text-base w-full space-y-1">
                <p className="font-medium md:text-lg lg:text-sm ">Bank Transfer Details:</p>
                <p className="text-xs md:text-lg lg:text-sm">Bank Name: GTBank</p>
                <p className="text-xs md:text-lg lg:text-sm">Account Name: Skyline Tech</p>
                <p className="text-xs md:text-lg lg:text-sm">Account Number: 0123456789</p>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="mt-5 w-full">
                <p className="font-medium text-sm md:text-lg lg:text-sm mb-2">Card Details</p>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border border-gray-300 py-2 px-3 rounded text-sm"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-300 py-2 px-3 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full border border-gray-300 py-2 px-3 rounded text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            {/* <div className="flex items-center justify-between w-full gap-6 mt-5">
              <button className="bg-transparent border w-full py-3 px-4 text-xs md:text-lg lg:text-sm rounded">Coupon Code</button>
              <button className="bg-[#8644DB] w-full text-white py-3 px-4 text-xs md:text-lg lg:text-sm rounded">Apply Coupon</button>
            </div> */}
            <button className="bg-[#8644DB] text-white py-3 px-4 text-xs md:text-lg lg:text-sm mt-5 rounded">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
