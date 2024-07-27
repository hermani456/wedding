import { Inter, Great_Vibes, Raleway } from "next/font/google";
import "./globals.css";
import Nv from "./components/Nv";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-greatVibes",
});

export const metadata = {
  title: "Maria & Diego",
  description: "Landing page for Maria & Diego's wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${greatVibes.variable} ${raleway.variable}`}>
      <body>
        <Nv />
        {children}
      </body>
    </html>
  );
}
