import { combineReducers } from 'redux'
import axios from "axios";

import signInReducer from './signIn'
import loadingReducer from './loading'
import detailevent from './detailevents'

const initialState = {
  islogin: '',
  testStatea: 0,
  testStateb: 0,
  contentlist: [],
  userinfo: [],
  testredux:"Hello From Redux",
  idsesi:[]
};
export const refreshPaging = () => dispatch => {
  axios.get(`https://my-mysql-api.herokuapp.com/content/testget`).then(res => {
        dispatch( {
      type: "FETCH_DATA",
      payload: res.data.result
    })
  });
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, islogin: true };
    case "LOGOUT":
      return { ...state, islogin: false };
    case "FETCH_DATA":
      return { ...state, contentlist: action.payload };
    case "USER_INFO":
      return { ...state, userinfo: action.payload };
    case "SET_SESI":
      return { ...state, idsesi: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  reducer,
  signInReducer,
  loadingReducer,
  detailevent
});
