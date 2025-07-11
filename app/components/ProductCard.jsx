import { useState, useEffect } from "react";
import Image from "next/image";

import buyss from "@/app/assets/icon/Buyss.svg";

export default function ProductCard({ id, title, price, image, state }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  // Проверяем, есть ли товар в избранных
  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(savedFavorites.some((item) => item.id === id));
  }, [id]);

  // Проверяем, есть ли товар в корзине
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setIsInCart(savedCart.some((item) => item.id === id));
  }, [id]);

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (isFavorite) {
      const updated = savedFavorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      const updated = [...savedFavorites, { id, title, price, image, state }];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(true);
    }
  };

  const toggleCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (isInCart) {
      const updated = savedCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      setIsInCart(false);
    } else {
      const updated = [...savedCart, { id, title, price, image, state }];
      localStorage.setItem("cart", JSON.stringify(updated));
      setIsInCart(true);
    }
  };

  return (
    <div className="flex justify-between py-10">
      <div className="relative">
        <Image src={image} alt={title} />
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <div
            onClick={toggleCart}
            className={`rounded-md m-3 p-2 cursor-pointer ${
              isInCart ? "bg-green-600" : "bg-gray-300 hover:bg-cyan-600"
            }`}
          >
            <Image src={buyss} alt="buy" width={30} height={30} />
          </div>
        </div>

        {/* Сердечко для избранного */}
        <div
          onClick={toggleFavorite}
          className="absolute top-5 right-5 rounded-sm backdrop-blur-xs cursor-pointer text-xl p-2"
        >
          <i
            className={`bi ${
              isFavorite ? "bi-heart-fill text-red-500" : "bi-heart"
            }`}
          ></i>
        </div>

        <p className="absolute top-5 left-5 rounded-sm py-1 px-2 bg-green-500">
          {state}
        </p>
      </div>
    </div>
  );
}
