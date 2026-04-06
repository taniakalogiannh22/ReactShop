"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

 const total = cart.reduce(
  (sum, item) => sum + item.price * (item.quantity || 1),
  0
);

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* TITLE */}
        <div className="text-center bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          <h1 className="text-4xl font-bold">
            Shopping Cart 
          </h1>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-400 text-center">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* LEFT - ITEMS */}
            <div className="md:col-span-2 space-y-4">

           {cart.map((item, index) => (
  <div
    key={index}
    className="flex items-center justify-between bg-black/70 border border-white/10 p-5 rounded-2xl"
  >

    <div>
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-400">${item.price}</p>

      {/* Quantity */}
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => decreaseQty(item.name)}
          className="px-2 bg-gray-700 rounded"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.name)}
          className="px-2 bg-gray-700 rounded"
        >
          +
        </button>
      </div>
    </div>

    <button
      onClick={() => removeFromCart(item)}
      className="bg-red-500 px-4 py-2 rounded-lg"
    >
      Remove
    </button>

  </div>
))}

            </div>

            {/* RIGHT - SUMMARY */}
            <div className="bg-black/70 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg h-fit">

              <h2 className="text-xl font-semibold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2 text-gray-300">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold text-white">${total}</span>
              </div>

              <button className="w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition mb-2">
                Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-gray-700 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Clear Cart
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}