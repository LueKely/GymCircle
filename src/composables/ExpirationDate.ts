export default {
  addDays(dateString: string, days: number): string {
    if (dateString === "None") return "None";

    const date = new Date(dateString);
    date.setDate(date.getDate() + days);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  },
};
