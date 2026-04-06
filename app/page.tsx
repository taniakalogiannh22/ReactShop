"use client";

import { useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const products = [
    { name: "Phone 14", price: 999 },
    { name: "McBook Pro", price: 1999 },
    { name: "ΕPods Pro", price: 249 },
    { name: "Watch", price: 399 },
    { name: "Pad Air", price: 599 },
    { name: "Gaming Mouse", price: 59 },
    { name: "Phone 13", price: 999 },
    { name: "Phone 11", price: 999 },
    { name: "Phone 15", price: 999 },
  ];

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, minPrice, maxPrice, sort]);

  return (
    <div className="min-h-screen bg-black px-6 py-10 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-60" />

      <div className="relative max-w-6xl mx-auto space-y-12">

        {/* HERO */}
        <div className="text-center bg-black/60 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ReactShop 🛍️
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Discover premium products with a modern shopping experience.
          </p>
        </div>

        {/* TITLE + BUTTON */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-white">
            Products
          </h3>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* FILTERS */}
        {showFilters && (
          <div className="bg-black/70 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg grid md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-xl text-white"
            />

            <input
              type="number"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-xl text-white"
            />

            <input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-700 rounded-xl text-white"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full p-3 bg-black border border-gray-700 rounded-xl text-white"
            >
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name-asc">Name: A → Z</option>
            </select>

          </div>
        )}

        {/* RESULTS */}
        <div className="flex justify-between items-center text-white">
          <span className="text-gray-400 text-sm">
            {filteredProducts.length} results
          </span>
        </div>

        {/* PRODUCTS */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-400">No products found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}