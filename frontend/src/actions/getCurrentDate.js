export const getCurrentDate = () => {
  return (dispatch) => {
    let formatCurrentMonth;
    let year;
    let day;
    let currentMonth;
    let date = new Date();
    let options = { month: "long" };

    //getCurrentMonth
    date.getMonth();
    formatCurrentMonth = String(
      new Intl.DateTimeFormat("en-US", options).format(date)
    );

    //getCurrentMonthNumber(Jan is 0)
    currentMonth = date.getMonth();

    //getCurrentYear
    year = String(date.getFullYear());

    //getCurrentDay
    day = String(date.getDate());

    //getDaysInAMonth
    let numberOfDays = new Date(year, currentMonth + 1, 0).getDate();

    //getFirstDayOfMonth(Sun-Sat 0-6)
    let firstDayOfMonth = new Date(`${formatCurrentMonth} 1, ${year}`).getDay();

    //getFirstDayOfNextMonth
    // let formatNextMonth = String(
    //   new Intl.DateTimeFormat("en-US", options).format(currentMonth + 1)
    // );
    // let firstDayOfNextMonth = new Date(
    //   `${formatNextMonth} 1, ${year}`
    // ).getDay();

    //getNumberOfDaysPreviousMonth
    // let numOfDaysPrevMonth = new Date(year, currentMonth, 0).getDate();

    //getNumberOfDaysNextMonth
    // let numOfDaysNextMonth = new Date(year, currentMonth + 2, 0).getDate();

    //setupCalendar
    let calendar = [
      "",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "00",
      "",
      "",
      "",
      "",
    ];

    for (let i = firstDayOfMonth; i <= numberOfDays; i++) {
      calendar[i] = `${i}`;
    }

    // for (let i = 1; i < 35 - numberOfDays; i++) {
    //   calendar[numberOfDays + i] = `${i}`;
    // }

    let row1 = calendar.slice(0, 7);
    let row2 = calendar.slice(7, 14);
    let row3 = calendar.slice(14, 21);
    let row4 = calendar.slice(21, 28);
    let row5 = calendar.slice(28, 35);

    dispatch({
      type: "ADD_CALENDAR_DATA",
      payload: { row1, row2, row3, row4, row5, day, year, formatCurrentMonth },
    });
  };
};
