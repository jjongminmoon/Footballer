export function getTwoWeeksDates(startDate: Date, lastDate: number) {
  const dateArr = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(lastDate)) {
    dateArr.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArr;
}

export function getDay(date: string) {
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
  const day = new Date(date).getDay();

  return dayArr[day];
}
