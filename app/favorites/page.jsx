"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-5xl mb-8">Favorite</h1>
        {favorites.length === 0 ? (
          <p>Вы ещё ничего не добавили в избранное.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                state={item.state}
                onRemoveFavorite={removeFavorite} // передаем функцию удаления
                isFavorite={true} // на этой странице все карточки - избранные
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
