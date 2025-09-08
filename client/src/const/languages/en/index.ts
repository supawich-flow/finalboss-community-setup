import { th as thLanguage } from "../th";
import { errorCode } from "./errorCode";

type Translation = typeof thLanguage;

export const en: Translation = {
  errorCode,
};
