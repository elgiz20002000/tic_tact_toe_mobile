export const getYears= ()=> Array.from(
    { length: 100 },
    (_, index) => new Date().getFullYear() - 50 + index
  );

  export const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  export const getDays = (currentDate: Date) => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const totalDays = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );
    const daysArray = Array(firstDay).fill("");
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };