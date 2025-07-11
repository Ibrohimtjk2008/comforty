import check from "@/app/assets/icon/check.svg";
import alert from "@/app/assets/icon/alert.svg";
import Image from "next/image";
import LanguageDropdown from "./LanguageDropdown";
import logo from "@/app/assets/icon/Logo.svg";
import search from "@/app/assets/icon/search.svg";
import buy from "@/app/assets/icon/Buy.svg";
import heart from "@/app/assets/icon/Heart.svg";
import people from "@/app/assets/icon/people.svg";
import menu from "@/app/assets/icon/Menu.svg";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="container mx-auto">
          <div className="py-2 flex  md:justify-between items-center">
            <div className="flex gap-2">
              <Image src={check} alt="error"></Image>
              <p className="text-white">Free shipping on all orders over $50</p>
            </div>
            <div className="text-white flex gap-6">
              <LanguageDropdown></LanguageDropdown>
              <p>Faqs</p>
              <div className="flex gap-1">
                <Image src={alert} alt="error"></Image>
                <p>Need Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="py-6 flex flex-col gap-5 md:flex-row items-center justify-between">
            <Image src={logo} alt="error"></Image>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-80 md:w-sm bg-white rounded-md px-4 py-3"
              />
              <Image
                className="absolute right-3 top-1/2 -translate-y-1/2"
                src={search}
                alt="error"
              ></Image>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <Link href={"/Card"}>
                <button className="bg-white rounded-md px-4 py-3 items-center flex gap-2 hover:bg-cyan-500 duration-300">
                  <Image src={buy} alt="error"></Image>
                  <p>Cart</p>
                </button>
              </Link>
              <Link href={"/favorites"}>
                <button className=" bg-white rounded-md md:px-4 px-9 py-3 hover:bg-cyan-500 duration-300">
                  <Image src={heart} alt="error"></Image>
                </button>
              </Link>
              <Link href={"/Login"}>
                <button className=" bg-white rounded-md md:px-4 px-10 py-3 hover:bg-cyan-500 duration-300">
                  <Image src={people} alt="error"></Image>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300">
        <div className="container mx-auto py-4 flex flex-col gap-5 md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-7">
            <button>
              <div className="flex gap-3 items-center border border-gray-300 rounded-md px-5 py-3 hover:bg-cyan-500 duration-300">
                <Image src={menu} alt="error"></Image>
                <p>All Categories</p>
              </div>
            </button>

            <ul className="flex flex-col md:flex-row gap-8">
              <li>
                <Link
                  href={"./"}
                  className="text-gray-500 text-lg hover:text-green-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-gray-500 text-lg hover:text-green-600 transition-colors duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-gray-500 text-lg hover:text-green-600 transition-colors duration-200"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-gray-500 text-lg hover:text-green-600 transition-colors duration-200"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-gray-500 text-lg hover:text-green-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-500">Contact:</p>
            <p>(808) 555-0111</p>
          </div>
        </div>
      </div>
    </>
  );
}
