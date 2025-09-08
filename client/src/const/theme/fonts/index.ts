import { IBM_Plex_Sans_Thai, Lato, Playfair_Display } from "next/font/google";
import {
  cloudLecentRegular,
  ebGaramond,
  greatVibes,
  herrVonMuellerhoff,
  italianno,
  luxuriousScript,
  parisienne,
  pinyoScript,
  priyati,
  prompt,
} from "./local";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "200", "500", "600"],
});

// Export individual font objects for direct use
export const fontObjects = {
  playfairDisplay,
  lato,
  ibmPlexSansThai,
  priyati,
  prompt,
  pinyoScript,
  parisienne,
  luxuriousScript,
  italianno,
  herrVonMuellerhoff,
  greatVibes,
  ebGaramond,
  cloudLecentRegular,
};

// Export CSS variables array for className
export const fonts = [
  playfairDisplay.variable,
  lato.variable,
  ibmPlexSansThai.variable,
  priyati.variable,
  prompt.variable,
  pinyoScript.variable,
  parisienne.variable,
  luxuriousScript.variable,
  italianno.variable,
  herrVonMuellerhoff.variable,
  greatVibes.variable,
  ebGaramond.variable,
  cloudLecentRegular.variable,
];
