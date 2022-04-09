import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const setUser = createAction(SET_USER, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

const initialState = {
};


// middlewaore actions

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
};

export { actionCreators };
