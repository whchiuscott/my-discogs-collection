import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "./head";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Scott's Music Collection 💽",
  description: "Check out my music collection at Discogs!",
};

export default function RootLayout({ children }) {
  // const header = (
  //   <header className="p-2 sm:p-8 flex items-center justify-between gap-4">
  //     <h1 className={"text-sm sm:text-lg textGradient " + fugaz.className}>
  //       Scott's Music Collection
  //     </h1>
  //   </header>
  // );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-sky-700 text-center " + fugaz.className}>
        Created by Scott{<br />}with 🩵
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
        {/* {header} */}
        {children}
        {footer}
      </body>
    </html>
  );
}
