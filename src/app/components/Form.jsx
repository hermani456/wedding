"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { set } from "@fileforge/client/dist/esm/client/codegen/core/schemas";

const Form = () => {
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState("");
  const [companion, setCompanion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/pdf", {
      method: "POST",
      body: JSON.stringify({ email, guest, companion }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setIsLoading(false);
      setEmail("");
      setGuest("");
      setCompanion("");
      alert("RSVP sent successfully!");
    }
    if (!res.ok) {
      setIsLoading(false);
      alert("Error sending RSVP");
    }
    // const data = await res.json();
    // console.log(data)
    // if (data.error) {
    //   alert(data.error);
    // }
  };
  const capitalizeWords = (str) => {
    str = str.toLowerCase();
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <div id="rsvp" className="font-raleway mb-20">
      <h1 className="text-center text-4xl my-5 font-greatVibes text-unolight">
        RSVP
      </h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5 text-red-500">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-unolight dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-gray-50 border border-gray-300 text-unolight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@yme.cl"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="guest"
            className="block mb-2 text-sm font-medium text-unolight dark:text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="guest"
            onChange={(e) => setGuest(capitalizeWords(e.target.value))}
            value={guest}
            className="bg-gray-50 border border-gray-300 text-unolight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="companion"
            className="block mb-2 text-sm font-medium text-unolight dark:text-white"
          >
            Your companion name
          </label>
          <input
            type="text"
            id="companion"
            onChange={(e) => setCompanion(capitalizeWords(e.target.value))}
            value={companion}
            className="bg-gray-50 border border-gray-300 text-unolight text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <Button
          type="submit"
          className="bg-dos hover:bg-unolight"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "RSVP"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Form;
