const initialState = {
    ModalLoading: false
  };
  
  const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADINGTOGGLE":
          return { ...state, ModalLoading: !state.ModalLoading };
      default:
        return state;
    }
  };
  
  export default loadingReducer