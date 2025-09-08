import type { ErrorApiCode } from "./ErrorApiCode";
import type { ErrorApiMessage } from "./ErrorApiMessage";

export type ErrorApiResponse<ErrorResponseData = undefined> =
  ErrorResponseData extends undefined
    ? {
        ok: false;
        code: ErrorApiCode;
        message: ErrorApiMessage;
      }
    : {
        ok: false;
        code: ErrorApiCode;
        message: ErrorApiMessage;
        data?: ErrorResponseData;
      };
