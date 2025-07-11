"use client";

import { useState, useEffect } from "react";
import rt from "@/app/assets/icon/Right 24px (2).svg";
import ProductCard from "./ProductCard";
import Image from "next/image";
import image1 from "@/app/assets/image/Image (4).png";
import image2 from "@/app/assets/image/Image (5).png";
import image3 from "@/app/assets/image/Image (6).png";
import image4 from "@/app/assets/image/Image (7).png";

export default function Featured_Products() {
  const items = [
    {
      id: 1,
      image: image1,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 2,
      image: image2,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 3,
      image: image3,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 4,
      image: image4,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 5,
      image: image1,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 6,
      image: image2,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 7,
      image: image3,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 8,
      image: image4,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 9,
      image: image1,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 10,
      image: image2,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 11,
      image: image3,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
    {
      id: 12,
      image: image4,
      title: "Library Stool Chair",
      price: "20$",
      state: "Naw",
    },
  ];

  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(4);
      }
      setCurrentIndex(0); // сбрасываем на первый слайд при смене ширины
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(items.length / cardsPerSlide);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const currentItems = items.slice(
    currentIndex * cardsPerSlide,
    currentIndex * cardsPerSlide + cardsPerSlide
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row md:px-5 justify-between items-center mb-6">
        <p className="text-2xl md:text-5xl">Featured Products</p>
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-cyan-500 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <Image
              src={rt}
              alt="left"
              className="rotate-180"
              width={24}
              height={24}
            />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-cyan-500 transition-colors duration-300"
            aria-label="Next slide"
          >
            <Image src={rt} alt="right" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 overflow-hidden transition duration-300">
        {currentItems.map(({ id, image, title, price, state }) => (
          <ProductCard
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
            state={state}
            className={`flex-shrink-0 w-full md:w-1/4`}
          />
        ))}
      </div>
    </div>
  );
}
