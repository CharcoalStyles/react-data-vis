import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Dosis, Montserrat } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-montserrat",
});
console.log(montserrat);
console.log(dosis);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${dosis.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
