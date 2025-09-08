import { ERROR_CODES as thErrorCode } from "../th/errorCode";
import { ERROR_MESSAGES as thErrorMessage } from "../th/errorMessage";

type ErrorCode = typeof thErrorCode;
type ErrorMessage = typeof thErrorMessage;

export const ERROR_CODES: ErrorCode = {
  ABORTED: "00001",
  UNKNOWN: "00000",
};

export const ERROR_MESSAGES: ErrorMessage = {
  ABORTED: "Request aborted",
  UNKNOWN: "An error occurred, please try again later",
};
