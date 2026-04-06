"use client";

import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const products = [
    { name: "iPhone 14", price: 999 },
    { name: "MacBook Pro", price: 1999 },
    { name: "AirPods Pro", price: 249 },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}