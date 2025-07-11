"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  // Теперь toggleCart принимает объект product целиком
  const toggleCart = (product) => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    const exists = saved.find((item) => item.id === product.id);

    let updated;
    if (exists) {
      // Удаляем товар из корзины
      updated = saved.filter((item) => item.id !== product.id);
    } else {
      // Добавляем товар в корзину
      updated = [...saved, product];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-10 md:px-0">
        <h1 className="text-5xl mb-8">Cart</h1>
        {cart.length === 0 ? (
          <p>Корзина пуста.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map(({ id, title, price, image, state }) => (
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                state={state}
                isInCartProp={true}
                onToggleCart={toggleCart}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
