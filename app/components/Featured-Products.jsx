"use client";

import { useState } from "react";
import rt from "@/app/assets/icon/Right 24px (2).svg";
import ProductCard from "./ProductCard";
import Image from "next/image";
import image1 from "@/app/assets/image/Image (4).png";
import image2 from "@/app/assets/image/Image (5).png";
import image3 from "@/app/assets/image/Image (6).png";
import image4 from "@/app/assets/image/Image (7).png";

export default function Featured_Products() {
  const items = [
    [
      { id: 1, image: image1, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 2, image: image2, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 3, image: image3, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 4, image: image4, title: "Library Stool Chair", price: "20$", state: "Naw" },
    ],
    [
      { id: 5, image: image1, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 6, image: image2, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 7, image: image3, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 8, image: image4, title: "Library Stool Chair", price: "20$", state: "Naw" },
    ],
    [
      { id: 9, image: image1, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 10, image: image2, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 11, image: image3, title: "Library Stool Chair", price: "20$", state: "Naw" },
      { id: 12, image: image4, title: "Library Stool Chair", price: "20$", state: "Naw" },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <p className="text-5xl">Featured Products</p>
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-cyan-500 transition-colors duration-300"
          >
            <Image src={rt} alt="left" className="rotate-180" width={24} height={24} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-cyan-500 transition-colors duration-300"
          >
            <Image src={rt} alt="right" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Обёртка с overflow-hidden */}
      <div className="overflow-hidden">
        {/* flex контейнер, который сдвигаем */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${items.length * 100}%`, transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}
        >
          {items.map((group, idx) => (
            <div key={idx} className="flex justify-between" style={{ width: `${100 / items.length}%` }}>
              {group.map(({ id, image, title, price, state }) => (
                <ProductCard
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  state={state}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

