import { ERROR_CODES } from "@/const/languages/th/errorCode";

export type ErrorApiCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
