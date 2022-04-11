import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { RESP } from "../../shared/response";
import axios from "axios";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const SET_FRIEND = "SET_FRIEND";

// action creators
const logout = createAction(LOG_OUT, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));
const setFriend = createAction(SET_FRIEND, user_list => ({ user_list }));
const getUser = createAction(GET_USER, user => ({ user }));

const initialState = {
  userinfo: null,
  friendsinfo: null,
};

// middlewaore actions
const loginMD = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    // 로그인 미들웨어

    // Mock API
    // const userinfo = await axios.post('url', {id: id, password: pwd}).then();
    const userinfo = RESP.LOGIN.result.userinfo;

    const data_list = [];
    userinfo.friends.map((v, i) => {
      const data = RESP.USER.result[v];
      data_list.push(data);
    })
    console.log(data_list);
    // axios
    
    // axios.get('url')

    dispatch(setUser(userinfo));
    dispatch(setFriend(data_list));
    history.push("/");
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
    [SET_FRIEND]:(state, action) =>
    produce(state, draft => {
      draft.friendsinfo = action.payload.user_list;
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
  signUpMD,
};

export { actionCreators };
