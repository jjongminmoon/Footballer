export function getTwoWeeksDates(startDate: Date, lastDate: number) {
  const dateArr = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(lastDate)) {
    dateArr.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArr;
}

export function getTwoWeeksDay(startDate: Date, lastDate: number) {
  const dayArr = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(lastDate)) {
    dayArr.push(currentDate.toDateString().slice(0, 3));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dayArr;
}
