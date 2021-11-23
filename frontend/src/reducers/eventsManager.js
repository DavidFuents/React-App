export default function eventsManager(
  state = {
    events: [],
    dayEvents: [],
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "LOADING_EVENTS":
      return {
        ...state,
        events: [...state.events],
        loading: true,
      };
    case "LOADING_DAY_EVENTS":
      return {
        ...state,
        dayEvents: [],
        loading: true,
      };
    case "ADD_DAY_EVENTS":
      return {
        ...state,
        dayEvents: [...state.dayEvents, ...action.payload],
        loading: false,
      };
    case "ADD_EVENTS":
      return {
        ...state,
        events: [...state.events, ...action.payload],
        loading: false,
      };
    case "ADD_EVENT":
      const event = {
        id: action.payload.id,
        name: action.payload.name,
        date: action.payload.date,
        time: action.payload.time,
        description: action.payload.description,
      };

      return {
        ...state,
        events: [...state.events, event],
        loading: false,
      };
    default:
      return state;
  }
}
