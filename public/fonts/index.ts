import {
  Cinzel,
  Cinzel_Decorative,
  Montserrat,
  Outfit,
} from "next/font/google";

export const cinzel = Cinzel({ subsets: ["latin"] });

export const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const montserrat = Montserrat({ subsets: ["latin"] });

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
