export function formatDates(startDate: string, endDate: string | null) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });
  const start = formatter.format(new Date(startDate));
  const end = endDate ? formatter.format(new Date(endDate)) : "Present";
  return `${start} - ${end}`;
}

export function formatDatesOnlyYear(startDate: string, endDate: string | null) {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate ? new Date(endDate).getFullYear() : "Present";
  return `${startYear} - ${endYear}`;
}
