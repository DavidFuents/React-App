export const addEvent = ({name, date, time, description}) => {
  return (dispatch) => {
    fetch("http://localhost:3000/events", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, date: date, time: time, description: description})
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({type: 'ADD_EVENT', payload: responseJSON})
      });
  };
};
