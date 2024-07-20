import { NextResponse } from "next/server";
import { NextRequest } from "next";
import { FileforgeClient } from "@fileforge/client";
import { compile } from "@fileforge/react-print";
import Template from "../../components/Template";
import fs from "fs";
const path = require("path");

const ff = new FileforgeClient({
  apiKey: process.env.ONEDOC_API_KEY,
});

export const GET = async () => {
  const HTML = await compile(Template());
  const imagePath = path.join(__dirname, 'Picture1.png');
  const imageBuffer = fs.readFileSync(imagePath);
  const imagePath2 = path.join(__dirname, 'Picture2.png');
  const imageBuffer2 = fs.readFileSync(imagePath2);

  const pdfStream = await ff.pdf.generate(
    [
      new File([HTML], "index.html", {
        type: "text/html",
      }),
      new File([imageBuffer], "Picture1.png", {
        type: "image/png",  
      }),
      new File([imageBuffer2], "Picture2.png", {
        type: "image/png",
      }),
    ],
    {
      options: {
        host: false,
        test: false,
      },
    },
    {
      timeoutInSeconds: 30,
    }
  );

  pdfStream.pipe(fs.createWriteStream("./result3.pdf"));

  const chunks = [];

  for await (const chunk of pdfStream) {
    chunks.push(chunk);
  }

  const pdfBuffer = Buffer.concat(chunks);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });

  // if (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }

  // const pdfBuffer = Buffer.from(pdfStream);

  // return new Response(pdfBuffer, {
  //   headers: {
  //     "Content-Type": "application/pdf",
  //   },
  // });
};
