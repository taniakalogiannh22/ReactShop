"use client";

import { useWishlist } from "../context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-4xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-400">No items in wishlist.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10"
            >
              <div>
                <Link href={`/product/${item.name}`}>
                  <h2 className="font-semibold hover:text-purple-400 cursor-pointer">
                    {item.name}
                  </h2>
                </Link>
                <p className="text-gray-400">${item.price}</p>
              </div>

              <button
                onClick={() => toggleWishlist(item)}
                className="bg-pink-500 px-3 py-1 rounded-lg hover:bg-pink-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}