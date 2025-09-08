import type { ErrorApiResponse } from "@/types/api/ErrorApiResponse";
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { ERROR_CODES, ERROR_MESSAGES } from "@/const/languages/th/errorCode";

type CreateRequestParams = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: any;
};

type CreateRequestOptions = AxiosRequestConfig & {
  onProgress?: (load: number, progress: number, total: number) => void;
  signal?: AbortSignal;
};

type CreateRequestReturn<ResponseData> = Promise<
  | {
      blob?(): unknown;
      ok: true;
      data: ResponseData;
    }
  | ErrorApiResponse<any>
>;

const baseAxiosStatic = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
});

const createRequestFunction = (axiosInstance: AxiosInstance) => {
  return async function createRequest<ResponseData>(
    params: CreateRequestParams,
    options?: CreateRequestOptions
  ): CreateRequestReturn<ResponseData> {
    try {
      let axiosRef: Promise<AxiosResponse<ResponseData, any>> | null = null;
      const { method, url } = params;
      const { signal } = options || {};
      if (method === "GET") {
        axiosRef = axiosInstance.get<ResponseData>(url, { signal });
      } else if (method === "PUT") {
        axiosRef = axiosInstance.put<ResponseData>(url, params.data, {
          signal,
        });
      } else if (method === "DELETE") {
        axiosRef = axiosInstance.delete<
          null,
          AxiosResponse<ResponseData>,
          null
        >(url, { signal });
      } else if (method === "POST") {
        axiosRef = axiosInstance.post<null, AxiosResponse<ResponseData>, null>(
          url,
          params.data,
          { signal }
        );
      }
      if (!axiosRef) throw "http method not supported";

      const response = await axiosRef;
      return {
        ok: true,
        data: response.data,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.name === "CanceledError" ||
          error.name === "AbortError" ||
          (typeof DOMException !== "undefined" &&
            error instanceof DOMException &&
            error.code === DOMException.ABORT_ERR)
        ) {
          // request is aborted by signal
          return {
            ok: false,
            code: ERROR_CODES.ABORTED,
            message: ERROR_MESSAGES.ABORTED,
          };
        }
      }

      if (axios.isAxiosError(error)) {
        return {
          ok: false,
          code: ERROR_CODES.UNKNOWN,
          message: ERROR_MESSAGES.UNKNOWN,
        };
      }

      return {
        ok: false,
        code: ERROR_CODES.UNKNOWN,
        message: ERROR_MESSAGES.UNKNOWN,
      };
    }
  };
};

export const AxiosUtil = {
  createRequest: createRequestFunction(baseAxiosStatic),
};
