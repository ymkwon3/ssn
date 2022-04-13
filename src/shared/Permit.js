import React from "react";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { isSession } from "./Session";
import { api } from "./api";
import { actionCreators as userActions } from "../redux/modules/user";

const Permit = props => {
  const dispatch = useDispatch();
  // 로그인이 되어있지 않은 상태로 다른 url로 접속할 경우 -영민
  const user = useSelector(state => state.user.userinfo)
  if (props.toLogin && !isSession()) {
    window.alert("로그인이 필요합니다!");
    history.replace("/login");
  }

  // 로그인 페이지에서 header, sidenav를 숨기기 위한 -영민
  if (user&&isSession()) {
    return <>{props.children}</>;
  }

  if (!user && isSession()) {
    api.get_autoLogin().then((res1) => {
      dispatch(userActions.setUser(res1));
      api.get_friend(res1.userId).then((res2) => {
        dispatch(userActions.setFriend(res2));
      })
    })
  }

  return <></>;
};

//로그인 유무에 따라 true false 줄 예정

export default Permit;
