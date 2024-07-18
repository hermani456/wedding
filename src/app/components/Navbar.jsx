"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/utils";
import Favicon from "../favicon.ico";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto px-5 py-3">
        {/* <div>
         <Image src={Favicon} className="w-10" />
        </div> */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto mb-5 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0">
            <li>
              <Link
                className="block py-2 px-3 md:text-xl text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
                href="/invitacion"
              >
                INVITACION
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 md:text-xl text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
                href="/nosotros"
              >
                GALLERIA
              </Link>
            </li>
            <li className="flex-grow min-w-64 lg:min-w-96"></li>
            <li>
              <Link
                className="block py-2 px-3 md:text-xl text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
                href="/ustedes"
              >
                RSVP
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 md:text-xl text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-secondary md:border-0 md:p-0 "
                href="/ellos"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
