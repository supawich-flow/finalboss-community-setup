import { ERROR_MESSAGES } from "@/const/languages/th/errorMessage";

export type ErrorApiMessage = (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES];
