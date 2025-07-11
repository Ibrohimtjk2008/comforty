"use client";

import { useState } from "react";
import Image from "next/image";
import rt from "@/app/assets/icon/Right 24px (2).svg";
import Image17 from "@/app/assets/image/Image (17).png";
import double_quotes_r from "@/app/assets/icon/double_quotes_r 1.svg";

export default function Coment() {
  const cards = [
    {
      id: 1,
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus sit amet mi nec massa tincidunt blandit et eu sem.
      Maecenas laoreet ultrices diam dignissim posuere. Aenean
      ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus.
      In ac bibendum ex. Aenean dolor massa, euismod sit amet
      suscipit et“`,
      name: "Kristin Watson",
      role: "Fashion Designer",
      avatar: Image17,
    },
    {
      id: 2,
      text: `Nullam sapien elit, dignissim eu viverra et, scelerisque et
      felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam
      et. Duis nulla velit, dignissim ut odio ac, eleifend luctus
      leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat
      rutrum.`,
      name: "Esther Howard",
      role: "Fashion Designer",
      avatar: Image17,
    },
    {
      id: 3,
      text: `Suspendisse potenti. Fusce sit amet velit a augue mollis
      blandit. Nullam fermentum ex at turpis luctus efficitur.
      Praesent consequat, nunc nec pulvinar vehicula, urna elit
      feugiat lorem, in gravida metus magna at libero.`,
      name: "John Doe",
      role: "Web Developer",
      avatar: Image17,
    },
    {
      id: 4,
      text: `Mauris non purus commodo, vulputate nibh ut, ullamcorper
      nulla. Curabitur sit amet lectus rutrum, sagittis eros non,
      condimentum justo. Phasellus eu sapien in sem bibendum
      posuere.`,
      name: "Jane Smith",
      role: "Graphic Designer",
      avatar: Image17,
    },
  ];

  const [index, setIndex] = useState(0);

  // Кол-во отзывов, которые показываем одновременно
  const visibleCount = 2;

  const prev = () => {
    setIndex((prev) =>
      prev - visibleCount < 0
        ? cards.length - visibleCount
        : prev - visibleCount
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev + visibleCount >= cards.length ? 0 : prev + visibleCount
    );
  };

  // Берём срез массива отзывов для отображения
  const visibleCards = cards.slice(index, index + visibleCount);

  // Если дошли до конца, а элементов меньше visibleCount — добираем с начала
  if (visibleCards.length < visibleCount) {
    visibleCards.push(...cards.slice(0, visibleCount - visibleCards.length));
  }

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-10">
          <p className="text-3xl md:text-5xl">What client says about us</p>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-cyan-500 transition-colors duration-300"
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
            >
              <Image src={rt} alt="right" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center md:flex-row gap-4 py-10 justify-center">
          {visibleCards.map(({ id, text, name, role, avatar }) => (
            <div
              key={id}
              className="w-1/2 bg-white flex flex-col rounded-xl shadow-sm gap-4 px-10 py-5"
            >
              <div className="border-l-4 border-cyan-700 pl-4">
                <p className="text-gray-500">{text}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Image src={avatar} alt={name} width={50} height={50} />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-300">{role}</p>
                  </div>
                </div>
                <Image
                  src={double_quotes_r}
                  alt="quote"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
