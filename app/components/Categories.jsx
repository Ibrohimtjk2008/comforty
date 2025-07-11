"use client";
import Image from "next/image";
import Im1 from "@/app/assets/image/Image (8).png";
import Im2 from "@/app/assets/image/Image (9).png";
import Im3 from "@/app/assets/image/Image (10).png";
import Im4 from "@/app/assets/image/Image (11).png";
import Im5 from "@/app/assets/image/Image (12).png";
import rt from "@/app/assets/icon/Right 24px (2).svg";
import { useState } from "react";

const cardsData = [
  { img: Im1, title: "Desk Chair", count: "154 Products" },
  { img: Im2, title: "Wing Chair", count: "3,584 Products" },
  { img: Im3, title: "Wooden Chair", count: "157 Products" },
  { img: Im4, title: "Desk Chair", count: "154 Products" },
  { img: Im5, title: "Park Bench", count: "154 Products" },
];

export default function Categories() {
  const [cards, setCards] = useState(cardsData);

  const slideLeft = () => {
    // Перемещаем последнюю карточку в начало массива
    setCards((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const slideRight = () => {
    // Перемещаем первую карточку в конец массива
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-3xl md:text-5xl">Top Categories</p>
          <div className="flex gap-3">
            <button
              onClick={slideLeft}
              className="p-2 rounded-full bg-white shadow hover:bg-cyan-500 transition-colors duration-300"
            >
              <Image src={rt} alt="left" className="rotate-180" width={24} height={24} />
            </button>
            <button
              onClick={slideRight}
              className="p-2 rounded-full bg-white shadow hover:bg-cyan-500 transition-colors duration-300"
            >
              <Image src={rt} alt="right" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className="px-5 md:px-0 relative overflow-hidden py-10 ">
          <div className="flex gap-4">
            {cards.map((card, i) => (
              <div key={i} className="relative flex-shrink-0 mx-2" style={{ minWidth: 340 }}>
                <Image src={card.img} alt={card.title} />
                <div className="w-full rounded-b-xl absolute z-10 bottom-0 p-3 bg-black/70">
                  <p className="text-xl text-white font-semibold">{card.title}</p>
                  <p className="text-gray-300">{card.count}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </div>
  );
}

