type ObjectToQueryOptions = {
  deleteNull?: boolean;
};

export const UrlUtil = {
  objectToQuery(
    params: Record<string, any>,
    options: ObjectToQueryOptions = {},
  ): string {
    return Object.keys(params)
      .filter(
        (key) =>
          params[key] !== "" &&
          params[key] !== undefined &&
          (options.deleteNull ? params[key] !== null : true),
      ) // remove empty string & undefined & null (if removeNull is true)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
  },
};
