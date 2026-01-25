import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

type DateFormatToken =
  | "dddd" // full day name (e.g. Monday)
  | "ddd" // short day name (e.g. Mon)
  | "DD" // day with leading zero (e.g. 06)
  | "D" // day without leading zero (e.g. 6)
  | "MMMM" // full month name (e.g. January)
  | "MMM" // short month name (e.g. Jan)
  | "MM" // month with leading zero (e.g. 01)
  | "M" // month without leading zero (e.g. 1)
  | "YYYY" // full year (e.g. 2025)
  | "YY"
  | "HH"
  | "H"
  | "hh"
  | "h"
  | "mm"
  | "m"
  | "ss"
  | "s"
  | "A"
  | "a";

// Optional: define a utility type for common formats
type DateFormatString =
  | "ddd DD, MMM"
  | "MMMM DD, YYYY"
  | "DD/MM/YYYY"
  | "YYYY-MM-DD"
  | "dddd, MMMM D, YYYY"
  | "YYYY-MM-DD HH:mm:ss"
  | "MM/DD/YYYY hh:mm A"
  | "DD MMM YYYY, hh:mm A"
  | string; // Allow custom string as fallback if you want flexibility

export function formatReadableDate(
  dateInput: string,
  format: DateFormatString = "ddd DD, MMM"
): string {
  if (!dateInput) return "";
  if (dateInput.includes(" ")) return dateInput;
  const date = new Date(dateInput);

  const dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayNamesLong = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthNamesLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHour = hours % 12 || 12;

  const replacements: Record<DateFormatToken, string | number> = {
    dddd: dayNamesLong[date.getDay()],
    ddd: dayNamesShort[date.getDay()],
    DD: String(date.getDate()).padStart(2, "0"),
    D: date.getDate(),
    MMMM: monthNamesLong[date.getMonth()],
    MMM: monthNamesShort[date.getMonth()],
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: date.getMonth() + 1,
    YYYY: date.getFullYear(),
    YY: String(date.getFullYear()).slice(-2),
    HH: String(hours).padStart(2, "0"),
    H: hours,
    hh: String(twelveHour).padStart(2, "0"),
    h: twelveHour,
    mm: String(minutes).padStart(2, "0"),
    m: minutes,
    ss: String(seconds).padStart(2, "0"),
    s: seconds,
    A: ampm,
    a: ampm.toLowerCase(),
  };

  return format.replace(
    /dddd|ddd|DD|D|MMMM|MMM|MM|M|YYYY|YY|HH|H|hh|h|mm|m|ss|s|A|a/g,
    (token) => String(replacements[token as DateFormatToken] || token)
  );
}

export function encodeData(data: string) {
  try {
    return Buffer.from(data).toString("base64");
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function decodeData(data: string) {
  try {
    if (!data) throw Error("");
    return Buffer.from(data, "base64").toString("utf-8");
  } catch (error) {
    console.error(error);
    return "";
  }
}

interface UrlQueryParams {
  params: Record<string, string | number>;
  key: string;
  value: string | null;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  return qs.stringifyUrl(
    {
      url: window.location.href,
      query: {
        ...params,
        [key]: value,
      },
    },
    { skipNull: true },
  );
}