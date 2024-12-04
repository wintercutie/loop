import { Montserrat } from "next/font/google";

const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const montserrat = montserrat_init.variable;
