const initialState = {
    eventid: ''
  };
  
  const detailevent = (state = initialState, action) => {
    switch (action.type) {
        case "DET_EVENT_ID":
          return { ...state, eventid: action.payload };
      default:
        return state;
    }
  };
  
  export default detailevent