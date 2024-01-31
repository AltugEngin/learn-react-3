import { Inter, Caveat } from "next/font/google";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
export const galano = localFont({ src: "./fonts/GalanoGrotesqueMedium.otf" });
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});
