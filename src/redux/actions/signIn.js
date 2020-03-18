import axios from "axios";

const signInStart = () => {
  return {
    type: "SIGN_IN_START"
  };
};

const signInSuccess = data => {
  return {
    type: "SIGN_IN_SUCCESS",
    payload: data
  };
};

const signInFailed = error => {
  return {
    type: "SIGN_IN_FAILED",
    payload: error
  };
};

export const signIn = data => dispatch => {
    console.log(true)
  dispatch(signInStart());

  axios
    .post(`https://my-mysql-api.herokuapp.com/user/login`, data, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(result => {
      if (result.data.message === "Akun tidak ditemukan") {
        // setValue({
        //   ...value,
        //   prm_akun_stat: "invalid"
        // });
        dispatch(signInFailed());
        // props.dispatch({ type: 'LOADINGTOGGLE' });
        // alert(result.data.message);
      } else if (result.data.message === "password is invalid") {
        // setValue({
        //   ...value,
        //   prm_akun_stat: "valid",
        //   prm_pass_stat:"invalid"
        // });
        // props.dispatch({ type: 'LOADINGTOGGLE' });
        // alert(result.data.message);
        dispatch(signInFailed());
      } else {
        // props.dispatch({ type: 'LOADINGTOGGLE' });
        // props.dispatch({ type: 'LOGIN' });
        // props.dispatch({ type: 'MODAL_LOGIN' });
        // alert(result.data.message);
        // console.log(props);
        // setValue({
        //   prm_akun: "",
        //   pass_user: "",
        //   prm_akun_stat: "",
        //   prm_pass_stat:""
        // });
        dispatch(signInSuccess());
      }
    });
};
