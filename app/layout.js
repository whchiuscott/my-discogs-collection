import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "./head";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Scott's Record Collection 💽",
  description: "Check out my music collection at Discogs!",
};

export default function RootLayout({ children }) {
  const footer = (
    <footer className="p-2 pb-6 grid place-items-center">
      <p className={"text-sky-700 text-center " + fugaz.className}>
        Created with 🩵 <br />
        Copyright © Scott Chiu 2025
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />

      <body
        className={
          "w-full max-w-[1200px] mx-auto text-sm sm:text-base min-h-screen flex flex-col " +
          opensans.className
        }
      >
        {children}
        {footer}
      </body>
    </html>
  );
}
