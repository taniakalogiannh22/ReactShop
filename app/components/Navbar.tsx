"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const router = useRouter();

  return (
    <nav className="bg-black/70 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          ReactShop
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4 text-sm text-gray-300">

          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative hover:text-purple-400">
             Cart

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <span className="text-gray-400">{user}</span>

              <button
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-3 py-1 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 transition"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}