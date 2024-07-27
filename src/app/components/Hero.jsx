import React from "react";
import Image from "next/image";
import photo from "../../../public/1.webp";
import mariaydiego from "../../../public/mariaydiego.png";
import diegoymaria from "../../../public/diegoymaria.png";
import diegomaria from "../../../public/diegomaria.png";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl text-unolight font-greatVibes">
            Maria & Diego
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Mark your calendars for a day filled with love, laughter, and joy.
          </p>
          <Link href="#rsvp">
            <Button className="bg-dos hover:bg-unolight">RSVP</Button>
          </Link>
        </div>
        <div className="mx-auto lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={diegomaria} alt="Hero" width={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
