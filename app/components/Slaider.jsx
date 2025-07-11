"use client";

import { useState } from "react";
import Image from "next/image";
import Rightt from "@/app/assets/icon/Rightt.svg";
import Right from "@/app/assets/icon/Right.svg";
import Line from "@/app/assets/icon/Line.svg";
import BG from "@/app/assets/image/BG.png";
import Discount from "@/app/assets/image/Discount.png";
import product from "@/app/assets/image/Product.png";
import Link from "next/link";

const slides = [
  {
    welcome: "Welcome to chairy",
    title: "Best Furniture \n Collection for your \n interior.",
    bg: BG,
    discount: Discount,
    product: product,
  },
  {
    welcome: "Hello from slide 2",
    title: "Another great \n Furniture selection \n for your home.",
    bg: BG,
    discount: Discount,
    product: product,
  },
  // Можно добавить ещё слайдов
];

export default function Slaider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const slide = slides[currentIndex];

  return (
    <div className="md:mx-15 bg-gray-200 relative h-auto lg:h-[800px] rounded-b-4xl">
      <div className="flex justify-between items-center px-20 absolute top-0 w-full h-full z-10">
        <button
          onClick={prev}
          className="bg-white rounded-full p-2 hover:bg-cyan-500 transition-colors duration-300"
        >
          <div className="w-3 h-3 md:w-5 md:h-5 lg:w-12 lg:h-12 relative">
            <Image src={Rightt} alt="left" fill className="object-contain" />
          </div>
        </button>
        <button
          onClick={next}
          className="bg-white rounded-full p-2 hover:bg-cyan-500 transition-colors duration-300"
        >
          <div className="w-3 h-3 md:w-5 md:h-5 lg:w-12 lg:h-12 relative">
            <Image src={Right} alt="Right" fill className="object-contain" />
          </div>
        </button>
      </div>

      <div className="px-32 flex justify-between">
        <div className="py-5 lg:py-68 lg:pl-10 flex flex-col gap-6">
          <div>
            <p className="text-sm md:text-sm lg:text-xl">{slide.welcome}</p>
            <p className="text-xl md:text-xl lg:text-6xl whitespace-pre-line">
              {slide.title}
            </p>
          </div>
          <Link href={"#"}>
            <button className="bg-cyan-600 text-white hover:bg-cyan-950 flex gap-5 rounded-md p-3">
              <p className="text-sm md:text-xl">Shop Now</p>
              <Image src={Line} alt="error" />
            </button>
          </Link>
        </div>
        <div>
          <div className="hidden md:hidden lg:block w-full h-[500] relative">
            <Image src={slide.bg} alt="error" />
            <div className="absolute top-14 right-5 z-10">
              <Image src={slide.discount} alt="discount" />
            </div>
            <div className="absolute top-20 right-20">
              <Image src={slide.product} alt="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
