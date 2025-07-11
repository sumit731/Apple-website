  import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../utils/product";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6 text-center text-red-600">Product not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/store" className="text-blue-600 underline">&larr; Back to Store</Link>
      <div className="mt-4 bg-white p-6 rounded-2xl shadow-xl">
        <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-xl mb-6" />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <p className="text-lg text-gray-700 font-medium mb-4">{product.price}</p>
        <p className="text-gray-700 mb-4">
          This is a detailed view of the {product.name}. You can add more technical specs, features, or even reviews here.
        </p>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition">
          ⭐ Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
