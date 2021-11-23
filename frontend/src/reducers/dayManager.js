export default function dayManager(
  state = {
    days: []
  }, action) {
  switch (action.type) {
    case "ADD_DAY":
      let day = {
        id: action.payload.id,
        date: action.payload.date
      }
      return {
        ...state,
        days: [...state.days, day],
        loading: false,
      };
    default:
      return state;
  }
}
