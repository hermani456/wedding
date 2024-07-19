import { NextResponse } from "next/server";
import fs from "fs";
import { FileforgeClient } from "@fileforge/client";
import { compile } from "@fileforge/react-print";
import React from "react";
import { File } from "formdata-node";
import Document from "./components/Document";

const ff = new FileforgeClient({
    apiKey: process.env.ONEDOC_API_KEY, // replace with your API key
  });

export async function POST(request) {
  try {
    const HTML = await compile(<Document />);

    const pdf = await ff.pdf.generate(
      [
        new File([HTML], "index.html", {
          type: "text/html",
        }),
        // new File(
        //   [fs.readFileSync(__dirname + "/images/fileforge_cover.png")],
        //   "fileforge_cover.png",
        //   {
        //     type: "image/png",
        //   }
        // ),
      ],
      {
        options: {
          host: false,
          test: false,
        },
      }
    );

    pdf.pipe(fs.createWriteStream("output.pdf"));
  } catch (error) {
    console.error("Error during PDF conversion:", error);
  }
}