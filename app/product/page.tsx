"use client";

import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductsPage() {
  const products: Product[] = [
    { id: 1, name: "iPhone 14", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1999 },
    { id: 3, name: "AirPods Pro", price: 249 },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}