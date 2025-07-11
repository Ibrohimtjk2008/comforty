"use client";
import { useState } from "react";
import strelk from "@/app/assets/icon/strelk.svg";
import Image from "next/image";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Eng");

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="flex items-center gap-1">
        {selected}
        <Image className="font-bold" src={strelk} alt="error"></Image>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-gray-800 text-white">
          {selected !== "Ru" && (
            <button
              onClick={() => handleSelect("Ru")}
              className="block w-full px-4 py-2 text-center"
            >
              Ru
            </button>
          )}
          {selected !== "Eng" && (
            <button
              onClick={() => handleSelect("Eng")}
              className="block w-full px-4 py-2 text-left"
            >
              Eng
            </button>
          )}
        </div>
      )}
    </div>
  );
}
