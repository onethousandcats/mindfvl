export const today = () => new Intl.DateTimeFormat("en-US").format(new Date());

export const formattedDate = (date: string) => {
  const [year, month, day] = date.split("-");
  return `${month}/${day}/${year}`;
};
