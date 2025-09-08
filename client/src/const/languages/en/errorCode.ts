import {
  ERROR_CODES as thErrorCode,
  ERROR_MESSAGES as thErrorMessage,
} from "../th/errorCode";

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
