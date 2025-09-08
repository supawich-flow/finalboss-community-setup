import { MantineThemeOverride } from "@mantine/core";
import { colors } from "./colors";
import { fontObjects } from "./fonts";

export const theme: MantineThemeOverride = {
  colors: {
    primary: colors.primary,
  },
  primaryColor: "primary",
  fontFamily: `${fontObjects.lato.style.fontFamily}, ${fontObjects.ibmPlexSansThai.style.fontFamily}, sans-serif`,
  fontFamilyMonospace: `${fontObjects.prompt.style.fontFamily}, 'Courier New', monospace`,
  other: {
    // Display fonts for headings and special text
    displayFont: `${fontObjects.playfairDisplay.style.fontFamily}, serif`,
    headingFont: `${fontObjects.priyati.style.fontFamily}, serif`,

    // Script and decorative fonts
    scriptFont: `${fontObjects.greatVibes.style.fontFamily}, cursive`,
    decorativeFont: `${fontObjects.luxuriousScript.style.fontFamily}, cursive`,
    elegantFont: `${fontObjects.parisienne.style.fontFamily}, cursive`,
    vintageFont: `${fontObjects.pinyoScript.style.fontFamily}, cursive`,
    classicFont: `${fontObjects.italianno.style.fontFamily}, cursive`,
    formalFont: `${fontObjects.herrVonMuellerhoff.style.fontFamily}, cursive`,

    // Reading fonts
    bodyFont: `${fontObjects.ebGaramond.style.fontFamily}, serif`,
    specialFont: `${fontObjects.cloudLecentRegular.style.fontFamily}, sans-serif`,
  },
};
