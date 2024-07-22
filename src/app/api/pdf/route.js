import { NextResponse } from "next/server";
import { NextRequest } from "next";
import { FileforgeClient } from "@fileforge/client";
import { compile } from "@fileforge/react-print";
import Template from "../../components/Template";
import fs from "fs";
import { promises as fss } from 'fs';
import { Resend } from "resend";
// const path = require("path");

const resend = new Resend(process.env.RESEND_API_KEY);

const ff = new FileforgeClient({
  apiKey: process.env.ONEDOC_API_KEY,
});

export const POST = async (req) => {
  const body = await req.json();
  const { name, guest, email } = body;
  console.log(body);
  const HTML = await compile(<Template name={name} guest={guest} email={email}/>);
  const imagePath = await fss.readFile(process.cwd() + '/public/Picture1.png');
  const imagePath2 = await fss.readFile(process.cwd() + '/public/Picture2.png');
  const imagePath3 = await fss.readFile(process.cwd() + '/public/border1.png');
  const imagePath4 = await fss.readFile(process.cwd() + '/public/border.png');
  const imagePath5 = await fss.readFile(process.cwd() + '/public/2.png');

  const pdfStream = await ff.pdf.generate(
    [
      new File([HTML], "index.html", {
        type: "text/html",
      }),
      // new File([imagePath], "Picture1.png", {
      //   type: "image/png",  
      // }),
      // new File([imagePath2], "Picture2.png", {
      //   type: "image/png",
      // }),
      new File([imagePath4], "border.png", {
        type: "image/png",
      }),
      // new File([imagePath5], "2.png", {
      //   type: "image/png",
      // }),
      // new File([imagePath3], "border1.png", {
      //   type: "image/png",
      // }),
      // new File([imagePath3], "border1.png", {
      //   type: "image/png",
      // }),
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

  // pdfStream.pipe(fs.createWriteStream("./result3.pdf"));

  const chunks = [];

  for await (const chunk of pdfStream) {
    chunks.push(chunk);
  }

  const pdfBuffer = Buffer.concat(chunks);

  const { data, error } = await resend.emails.send({
    from: "Yme.cL <send@yme.cl>",
    to: email,
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
    attachments: [
      {
        filename: 'invitation.pdf',
        content: pdfBuffer.toString('base64'),
        encoding: 'base64',
        contentType: 'application/pdf',
      },
    ],
  });

  if (error) {
    return console.error({ error });
  }

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
