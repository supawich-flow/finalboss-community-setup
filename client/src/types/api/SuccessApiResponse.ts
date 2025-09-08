export type SuccessApiResponse<ApiResponseData = undefined> =
  ApiResponseData extends undefined
    ? { ok: true }
    : { ok: true; data: ApiResponseData };