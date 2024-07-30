"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import diegomaria from "../../../public/diegomaria.png";
import { Button } from "./ui/button";
import Link from "next/link";
import music from "../../../public/music.mp3";
import wali from "../../../public/wali.webp";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(music);
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="relative">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl text-unolight font-greatVibes">
            Maria & Diego
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Mark your calendars for a day filled with love, laughter, and joy.
          </p>
          <div className="flex">
            <Link href="#rsvp">
              <Button className="bg-dos hover:bg-unolight">RSVP</Button>
            </Link>
            <Button
              onClick={handlePlayPause}
              className="bg-dos text-white hover:bg-unolight ml-4"
            >
              {isPlaying ? (
                <PauseIcon className="w-5 h-5" />
              ) : (
                <PlayIcon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
        <div className="mx-auto lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={diegomaria} alt="Hero" width={500} className="pointer-events-none"/>
        </div>
      </div>
      <div className="sticky bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-28">
        <Image src={wali} alt="Wali" fill className="object-cover pointer-events-none" />
      </div>
    </section>
  );
};

const Play = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
  );
};

const Pause = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
    </svg>
  );
};

const PlayIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
  </svg>
);

const PauseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm176 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-48z" />
  </svg>
);

export default Hero;
