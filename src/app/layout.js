import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Playfair_Display } from "next/font/google";
import Nv from "./components/Nv";

const inter = Inter({ subsets: ["latin"] });
// Playfair Display
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Nv />
        {children}
      </body>
    </html>
  );
}
