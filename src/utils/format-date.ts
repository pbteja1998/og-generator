import { format, localeFormat } from "light-date";

export function getFormattedDate(date: string): string {
  return format(
    new Date(date),
    `{dd} ${localeFormat(new Date(date), "{MMMM}")}, {yyyy}`,
  );
}
