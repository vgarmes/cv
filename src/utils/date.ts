function abbreviateMonth(date: string) {
  const [month, year] = date.split(" ");
  const abbreviatedMonth = month.slice(0, 3);
  return `${abbreviatedMonth} ${year}`;
}

export function formatDates(startDate: string, endDate: string | null) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  });
  const start = abbreviateMonth(formatter.format(new Date(startDate)));
  const end = endDate
    ? abbreviateMonth(formatter.format(new Date(endDate)))
    : "Present";
  return `${start} - ${end}`;
}
