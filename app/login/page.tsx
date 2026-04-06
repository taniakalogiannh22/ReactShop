"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    login(email);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-60" />

      <div className="relative w-full max-w-md bg-black/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-white/10">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">
          Welcome Back 
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
       
       {/* Email */}
<div className="relative">
  <input
    type="email"
    className="w-full p-4 pt-5 bg-transparent border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
  />
</div>

{/* Password */}
<div className="relative">
  <input
    type="password"
    className="w-full p-4 pt-5 bg-transparent border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
  />
</div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold tracking-wide hover:scale-[1.03] active:scale-[0.97] transition shadow-lg shadow-purple-700/30"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <span className="text-purple-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
