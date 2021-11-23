export const addDay = ({ day, date }) => {
  return (dispatch) => {
    fetch("http://localhost:3000/days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: day, date: date }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_DAY", payload: responseJSON });
      });
  };
};
