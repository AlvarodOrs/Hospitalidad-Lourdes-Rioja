import { Cormorant_Garamond, Raleway } from "next/font/google";

import Meta from "@/components/Meta";

import ScrollingEffects from "@/hooks/Scrolling";

import "@/styles/globals.css";
import "@/styles/components/pages.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Hospitalidad de Ntra. Sra. de Lourdes de La Rioja",
  description:
  "Asociación católica de peregrinación al Santuario de Lourdes.",
  icons: {
    icon: "/assets/images/icon/LOGOv1.3.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${raleway.variable}`}>
      <head><Meta /></head>
      <ScrollingEffects />
      <body>
        {children}
      </body>
    </html>
  );
}