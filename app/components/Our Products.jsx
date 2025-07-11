"use client";

import Link from "next/link";

import image1 from "@/app/assets/image/Image (4).png";
import image2 from "@/app/assets/image/Image (5).png";
import image3 from "@/app/assets/image/Image (6).png";
import image4 from "@/app/assets/image/Image (7).png";
import image5 from "@/app/assets/image/Image (13).png";
import image6 from "@/app/assets/image/Image (14).png";
import image7 from "@/app/assets/image/Image (15).png";
import image8 from "@/app/assets/image/Image (16).png";

import ProductCard from "./ProductCard";

export default function Our_Products() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full">
          <p className="text-3xl md:text-5xl text-center">Our Products</p>
          <div className="w-full">
            <ol className="flex-col flex md:flex-row gap-3 text-xl items-center justify-center py-3">
              <li>
                <Link href={"#"}>All</Link>
              </li>
              <li>
                <Link href={"#"}>Newest</Link>
              </li>
              <li>
                <Link href={"#"}>Trending</Link>
              </li>
              <li>
                <Link href={"#"}>Best Sellers</Link>
              </li>
              <li>
                <Link href={"#"}>Featured</Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-1  place-items-center md:grid-cols-2 lg:grid-cols-4 justify-between">
          <ProductCard
            id={1}
            image={image1}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
          <ProductCard
            id={2}
            image={image2}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
          <ProductCard
            id={3}
            image={image3}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
          <ProductCard
            id={4}
            image={image4}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
        </div>
        <div className="grid grid-cols-1  place-items-center md:grid-cols-2 lg:grid-cols-4 justify-between">
          <ProductCard
            id={5}
            image={image5}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
          <ProductCard
            id={6}
            image={image6}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
          <ProductCard
            id={7}
            image={image7}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
          <ProductCard
            id={8}
            image={image8}
            title={"Library Stool Chair"}
            price={"20$"}
            state={"Naw"}
          ></ProductCard>
        </div>
      </div>
    </>
  );
}
