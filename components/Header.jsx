import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 hover:bg-blue-700">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="hover:text-cyan-500 cursor-pointer font-bold text-4xl text-white">
             Hacemos su Pagina Web
            </span>
            <br />
            <span
              className="text-sm md:text-lg cursor-pointer font-mono whitespace-nowrap
            border-right-4 w-12 animate-pulse overflow-visible text-white"
            >
              Diseño De  Paginas Web y Aplicaciones
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer
               hover:text-cyan-500 active:bg-violet-700"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <span
        className="flex items-center justify-between font-thin text-xs md:text-base
       text-white pt-4 hover:text-black hover:bg-blue-200"
      >
        Atencion Personalizada..
        <p className="hover:text-black hover:bg-blue-200">
          Contacto: Bogota Colombia. Telefono:57 320 2937958
        </p>
      </span>
    </div>
  );
};

export default Header;
