"use client";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

type ProductProps = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: ProductProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item.name === name);

  return (
    <div className="bg-white text-black rounded-2xl p-5 shadow-lg flex flex-col gap-3">

      {/* Product Name */}
      <h2 className="text-lg font-semibold">{name}</h2>

      {/* Price */}
      <p className="text-gray-600">${price}</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">

        <button
          onClick={() => addToCart({ name, price })}
          className="flex-1 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

        <button
  onClick={() => toggleWishlist({ name, price })}
  className={`px-3 py-2 rounded-xl border transition ${
    isInWishlist
      ? "bg-red-500 text-white border-red-500"
      : "bg-white text-black border-gray-300"
  }`}
>
  {isInWishlist ? "❤️" : "🤍"}
</button>

      </div>
    </div>
  );
}