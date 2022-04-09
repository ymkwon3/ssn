import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { RESP } from "../../shared/response";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logout = createAction(LOG_OUT, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

const initialState = {
  userinfo: null,
};

// middlewaore actions
const loginMD = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    // 로그인 미들웨어
    // Mock API
    const userinfo = RESP.LOGIN.result.userinfo;


    dispatch(setUser(userinfo));
    history.replace("/");
  };
};

const signUpMD = (id, pwd, name) => {
  return function (dispatch, getState, { history }) {
    // 회원가입 미들웨어
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.userinfo = action.payload.user;
      }),
      [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.userinfo = null;
      }),
  },
  initialState
);

const actionCreators = {
  logout,
  loginMD,
};

export { actionCreators };
