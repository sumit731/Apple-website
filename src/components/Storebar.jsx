import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Star, StarOff } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import product from "../utils/product";

gsap.registerPlugin(ScrollTrigger);

const Storebar = () => {
  const [starred, setStarred] = useState([]);
  const cardRefs = useRef([]);
  const imageRef = useRef();

  const toggleStar = (id) => {
    setStarred((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Product card animations
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 60,
          scale: 0.95,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // Hero image zoom animation
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="w-full h-screen flex items-center justify-center">
        <img
          ref={imageRef}
          src="https://blog.frame.io/wp-content/uploads/2024/01/B0732-feaured-image.jpg"
          alt="Pro Vision"
          className="w-auto h-[80vh] object-cover rounded-2xl"
        />
      </div>

      {/* Store Grid */}
      <div className="px-6 py-10 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          🍎 Apple Store
        </h1>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {product.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-black rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 ease-in-out p-5 relative overflow-hidden"
            >
              <Link to={`/product/${product.id}`} className="block group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-5 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-white-900">
                      {product.name}
                    </h2>
                    <span className="inline-block mt-2 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-1 rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-700 mt-4">
                  {product.price}
                </p>
              </Link>

              <button
                onClick={() => toggleStar(product.id)}
                className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-400 z-10 transition-transform duration-300 transform hover:scale-125"
                title="Add to favorites"
              >
                {starred.includes(product.id) ? (
                  <Star fill="currentColor" />
                ) : (
                  <StarOff />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Starred Items */}
        {starred.length > 0 && (
          <div className="mt-20 bg-gray-100 rounded-2xl p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ⭐ Starred Items
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {product
                .filter((product) => starred.includes(product.id))
                .map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Storebar;
