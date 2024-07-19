"use client"
import { FileforgeClient } from "@fileforge/client";
import { compile } from "@fileforge/react-print";
import React from "react";
import { File } from "formdata-node";

import Document from "./components/Document";
// import Button from "./components/Button";
import dynamic from "next/dynamic";

const Button = dynamic(() => import('./components/Button'), {
  ssr: false, // This will make sure the Button is only rendered on the client-side
});


const page = async () => {
  // try {
  //   const HTML = await compile(<Document name="World" />);

  //   const pdf = await ff.pdf.generate(
  //     [
  //       new File([HTML], "index.html", {
  //         type: "text/html",
  //       }),
  //       new File(
  //         [fs.readFileSync(__dirname + "/images/fileforge_cover.png")],
  //         "fileforge_cover.png",
  //         {
  //           type: "image/png",
  //         }
  //       ),
  //     ],
  //     {
  //       options: {
  //         host: false,
  //         test: false,
  //       },
  //     }
  //   );

  //   pdf.pipe(fs.createWriteStream("output.pdf"));
  // } catch (error) {
  //   console.error("Error during PDF conversion:", error);
  // }

  const handleCreatePdf = async () => {
    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
      });
    } catch (error) {
      console.error("Error during PDF conversion:", error);
    }
  }
  // handleCreatePdf();
  return <div>
    <h1>PDF generated</h1>
    <p>Check the output.pdf file in the project directory to see the generated PDF.</p>
    <Button onClick={() => handleCreatePdf}>Create PDF</Button>
  </div>;
};

export default page;