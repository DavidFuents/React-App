export const fetchDayEvents = ({day}) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_DAY_EVENTS" });
    fetch(`http://localhost:3000/days/${day}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({type: 'ADD_DAY_EVENTS', payload: responseJSON})
      });
  };
};