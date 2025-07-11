import logo from "@/app/assets/icon/Logo.svg";
import fs from "@/app/assets/icon/fs.svg";
import tw from "@/app/assets/icon/tw.svg";
import ins from "@/app/assets/icon/in.svg";
import pn from "@/app/assets/icon/pn.svg";
import yt from "@/app/assets/icon/yt.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="border-y-2 border-gray-400 my-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-5 md:flex-row justify-between py-10 w-full">
            <div className="w-1/4 flex flex-col gap-5">
              <Image src={logo} alt="error"></Image>
              <p className="text-sm text-gray-400">
                Vivamus tristique odio sit amet velit semper,
                <br /> eu posuere turpis interdum.
                <br /> Cras egestas purus{" "}
              </p>
              <div className="flex gap-5 ">
                <Link href={"#"}>
                  <Image src={fs} alt="error"></Image>
                </Link>
                <Link href={"#"}>
                  <Image src={tw} alt="error"></Image>
                </Link>
                <Link href={"#"}>
                  <Image src={ins} alt="error "></Image>
                </Link>
                <Link href={"#"}>
                  <Image src={pn} alt="error "></Image>
                </Link>
                <Link href={"#"}>
                  <Image src={yt} alt="error"></Image>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/4">
              <p className="text-gray-400">Category</p>
              <ol className="flex flex-col gap-4 ">
                <li>
                  <Link
                    href={"#"}
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                  >
                    Sofa
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Armchair
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Wing Chair
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Desk Chair
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    wooden Chair
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Park Bench
                  </Link>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-5 w-1/4">
              <p className="text-gray-400">Support</p>
              <ol className="flex flex-col gap-4">
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Tearms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black hover:text-cyan-500  transition-colors duration-300"
                    href={"#"}
                  >
                    Help
                  </Link>
                </li>
              </ol>
            </div>
            <div className="flex items-center md:flex flex-col gap-4">
              <p className="text-gray-400">Newsletter</p>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your email"
                  className="border-2 rounded-sm p-2"
                />
                <button className="p-2 rounded-sm bg-cyan-700">
                  <p className="text-white">Subscribe</p>
                </button>
              </div>
              <p className="px-5 md:px-0 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam tincidunt erat enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
