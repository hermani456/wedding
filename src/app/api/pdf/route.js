import { NextResponse } from "next/server";
import { NextRequest } from "next";
import { FileforgeClient } from "@fileforge/client";
import { compile } from "@fileforge/react-print";
import Template from "../../components/Template";
import fs from "fs";
import { promises as fss } from "fs";
import { Resend } from "resend";
import { StackOverflowTipsEmail } from "../../../../emails/Template";
import pool from "../../../utils/db";

const resend = new Resend(process.env.RESEND_API_KEY);

const ff = new FileforgeClient({
  apiKey: process.env.ONEDOC_API_KEY,
});

export const POST = async (req) => {
  const body = await req.json();
  const { guest, companion, email, invitationcode } = body;

  const code = await pool.query(
    "SELECT * FROM invitationCodes WHERE code = $1",
    [invitationcode]
  );

  if (code.rows.length === 0 || code.rows[0].used) {
    return NextResponse.json(
      { error: "Invalid invitation code" },
      { status: 400 }
    );
  }

  // await pool.query("UPDATE invitationCodes SET used = true WHERE code = $1", [invitationcode]);

  const HTML = await compile(<Template guest={guest} companion={companion} />);
  const imagePath4 = await fss.readFile(process.cwd() + "/public/border2.png");

  const pdfStream = await ff.pdf.generate(
    [
      new File([HTML], "index.html", {
        type: "text/html",
      }),
      new File([imagePath4], "border2.png", {
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

  const { data, error } = await resend.emails.send({
    from: "Maria & Diego <send@yme.cl>",
    to: email,
    subject: "👩‍❤️‍💋‍👨Celebrate with Us! Maria and Diego's Wedding Invitation",
    react: StackOverflowTipsEmail({ guest, companion }),
    attachments: [
      {
        filename: "invitation.pdf",
        content: pdfBuffer.toString("base64"),
        encoding: "base64",
        contentType: "application/pdf",
      },
    ],
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  if (data) {
    return NextResponse.json("Email sent", { status: 200 });
  }

  // return NextResponse.json({ data });

  // return new Response(pdfBuffer, {
  //   headers: {
  //     "Content-Type": "application/pdf",
  //   },
  // });
};


export const GET = async () => {

  const code = await pool.query(
    "SELECT * FROM invitationCodes;"
  );

  return NextResponse.json(code.rows);
}