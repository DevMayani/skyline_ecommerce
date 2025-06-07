'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Keyboard from '../../public/assets/keyboard.png';
import Link from "next/link";
import { RxSlash } from "react-icons/rx";
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-5 md:px-16 md:py-10 lg:px-20 lg:py-16 bg-white">
      {/* Breadcrumb */}
      <div className="flex items-center text-xs md:text-lg lg:text-sm">
        <Link href="/" className="text-gray-400">Home</Link>
        <RxSlash className="text-gray-400" />
        <p>Cart</p>
      </div>

      {/* If cart has items, show details */}
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl md:text-3xl text-gray-600">Your cart is empty 🛒</p>
          <p className="text-xs md:text-lg lg:text-sm text-gray-500 mt-6">
            You can update quantity or remove items. Your cart details appear here as soon as you add a product.
          </p>
          <Link href="/" className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded text-sm">
            Go Back to Shop
          </Link>
        </div>
      ) : (
        <>
        
          <div className="overflow-x-auto py-10">
            <table className="w-full text-left border-collapse mb-6 table-fixed">
              <thead>
                <tr className="text-sm text-gray-500" style={{ boxShadow: '0px 1px 13px 0px #0000000D' }}>
                  <th className="py-4 w-[30%] text-center">Product</th>
                  <th className="py-4 w-[23%] text-center">Price</th>
                  <th className="py-4 w-[23%] text-center">Quantity</th>
                  <th className="py-4 w-[23%] text-center">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} style={{ boxShadow: '0px 1px 13px 0px #0000000D' }}>
                    <td className="py-4 px-2 md:px-0">
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-20 h-20 md:w-16 md:h-16 relative">
                          <Image src={item.image} alt={item.name} layout="fill" objectFit="contain" />
                        </div>
                        <span className="whitespace-nowrap text-xs md:text-lg lg:text-sm">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-xs md:text-lg lg:text-sm text-center">${item.price}</td>
                    <td className="py-4 text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="text-black border w-[60%] md:w-[30%] outline-none px-2 py-1 text-xs md:text-lg lg:text-sm"
                      />
                    </td>
                    <td className="py-4 text-xs md:text-lg lg:text-sm text-center">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button className="border px-6 py-2 text-xs md:text-lg lg:text-sm">Return To Shop</button>
            <button className="border px-6 py-2 text-xs md:text-lg lg:text-sm">Update Cart</button>
          </div>

          {/* Coupon + Summary */}
          <div className="py-10 md:py-20 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border px-4 py-2 text-sm rounded"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                Apply Coupon
              </button>
            </div>

            <div className="flex-1 md:max-w-xs md:ml-auto border p-6 rounded">
              <h3 className="font-semibold mb-4 text-sm md:text-xl lg:text-base">Cart Total</h3>
              <div className="flex justify-between mb-2 text-xs md:text-lg lg:text-sm">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between mb-2 text-xs md:text-lg lg:text-sm">
                <span>Shipping:</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between font-semibold mb-4 text-xs md:text-lg lg:text-sm">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
              <button className="bg-purple-600 text-white w-full py-2 rounded text-xs md:text-lg lg:text-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
