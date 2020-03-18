const initialState = {
  modalLogin: false
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_LOGIN":
      return { ...state, modalLogin: !state.modalLogin };
    default:
      return state;
  }
};

export default signInReducer