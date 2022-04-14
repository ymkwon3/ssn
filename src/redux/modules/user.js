import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import moment from "moment";
import { RESP } from "../../shared/response";
import axios from "axios";
import { setSession, removeSession } from "../../shared/Session";
import { api } from "../../shared/api";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const UPDATE_USER = "UPDATE_USER";
const SET_FRIEND = "SET_FRIEND";
const GET_COMMENT = "GET_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
// const URL = "http://3.34.129.39";
// const URL = "http://54.180.90.16";

// action creators
const logout = createAction(LOG_OUT, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));
const setFriend = createAction(SET_FRIEND, user_list => ({ user_list }));
const getUser = createAction(GET_USER, user => ({ user }));
const updateUser = createAction(UPDATE_USER, user => ({ user }));
const getComment = createAction(GET_COMMENT, comment_list => ({
  comment_list,
}));
const setComment = createAction(SET_COMMENT, comment => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, comment => ({ comment }));

const initialState = {
  userinfo: null,
  friendsinfo: null,
  comment: null,
};

// middlewaore actions
const loginMD = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    // 로그인 미들웨어

    api.post_login(id, pwd).then(res1 => {
      dispatch(setUser(res1));
      api.get_friend(res1.userId).then(res2 => {
        dispatch(setFriend(res2));
        history.replace("/");
      });
    });

  };
};

const signUpMD = (id, pwd, name) => {
  return async function (dispatch, getState, { history }) {
    // 회원가입 미들웨어
    api.post_signUp(id, pwd, name);

    history.replace("/login");
  };
};

const checkInOutMD = Time => {
  return function (dispatch, getState, { history }) {
    // 체크인/아웃 미들웨어
    let user = getState().user.userinfo;
    if (user.connecting) {
      // 현재 유저가 접속중이라면 체크아웃 미들웨어
      api.post_checkOut(user.userId, Time).then(res => {
        user = {
          ...user,
          totalTime: res,
          startTime: "",
          connecting: !user.connecting,
        };
        dispatch(updateUser(user));
      });
    } else {
      // 현재 유저가 접속중이 아니라면 체크인 미들웨어
      api.post_checkIn(user.userId, Time);
      user = { ...user, startTime: Time, connecting: !user.connecting };
      dispatch(updateUser(user));
    }
  };
};

const getCommentMD = userId => {
  return function (dispatch, getState, { history }) {
    // 해당 유저 방명록 가져오기
    api.get_comment(userId).then(res => {
      dispatch(getComment(res));
    });
  };
};

const setCommentMD = (userId, content, writer) => {
  return function (dispatch, getState, { history }) {
    // 해당 유저 방명록에 글 쓰기
    const user = getState().user.userinfo;
    const date = moment().format("YYYY-MM-DD HH:mm:ss");
    api.post_comment(userId, user.nickName, date, content, writer).then(res => {
      dispatch(setComment(res));
    });
  };
};

const deleteCommentMD = (userId, commentId) => {
  return function (dispatch, getState, { history }) {
    // 해당 유저 방명록 가져오기
    api.delete_comment(userId, commentId).then(res => {
      dispatch(deleteComment(commentId));
    });
  };
};

const setStatusMsgMD = (userId, status) => {
  return function (dispatch, getState, { history }) {
    // 해당 유저 상태메세지 업데이트
    const user = getState().user.userinfo;
    api.post_status(userId, status).then(res => {
      dispatch(setUser({...user, statusMeg: status}));
    })
  };
}

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.userinfo = action.payload.user;
      }),
    [SET_FRIEND]: (state, action) =>
      produce(state, draft => {
        draft.friendsinfo = action.payload.user_list;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.userinfo = null;
        draft.friendsinfo = null;
        removeSession();
      }),
    [UPDATE_USER]: (state, action) =>
      produce(state, draft => {
        draft.userinfo = action.payload.user;
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.comment = action.payload.comment_list;
        draft.comment.reverse();
      }),
    [SET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.comment.unshift(action.payload.comment);
      }),
      [DELETE_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.comment = draft.comment.filter((v) => v.commentId !== action.payload.comment);
      }),
  },
  initialState
);

const actionCreators = {
  logout,
  loginMD,
  signUpMD,
  checkInOutMD,
  getCommentMD,
  setCommentMD,
  deleteCommentMD,
  setStatusMsgMD,
  setFriend,
  setUser,
};

export { actionCreators };
