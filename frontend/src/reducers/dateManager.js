export default function dateManager(
  state = {
    currentDay: 'Day',
    currentMonth: 'Month',
    currentYear: 'Year',
    calendar: {
      row1: ['0'],
      row2: ['0'],
      row3: ['0'],
      row4: ['0'],
      row5: ['0']
    },
  }, action) {
  switch (action.type) {
    case 'ADD_CALENDAR_DATA':
      return {
        ...state,
        currentDay: action.payload.day,
        currentMonth: action.payload.formatCurrentMonth,
        currentYear: action.payload.year,
        calendar: {
          row1: action.payload.row1,
          row2: action.payload.row2,
          row3: action.payload.row3,
          row4: action.payload.row4,
          row5: action.payload.row5,
        },
      }
    
    default:
      return state;
  }
};
