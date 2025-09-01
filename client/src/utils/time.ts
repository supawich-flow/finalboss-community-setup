import { format, formatDistanceToNow, parseISO } from "date-fns";
import { th } from "date-fns/locale";

export const formatDate = (unformattedDate: string): string => {
  try {
    const date = parseISO(unformattedDate);
    return format(date, "dd MMM, yyyy");
  } catch (err) {
    return "";
  }
};

export const timeAgo = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: th });
  } catch {
    return "";
  }
};
