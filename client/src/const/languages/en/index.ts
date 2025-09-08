import { th as thLanguage } from "../th";
import { ERROR_CODES, ERROR_MESSAGES } from "./errorCode";

type Translation = typeof thLanguage;

export const en: Translation = {
  errorCode: ERROR_CODES,
  errorMessage: ERROR_MESSAGES
};
