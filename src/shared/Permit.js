import React from "react";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";

const Permit = props => {
  // 나중에 로그인 관련 세션?이 추가되면 그쪽으로 바꿔야 될듯 -영민
  const userinfo = useSelector(state => state.user.userinfo);

  // 로그인이 되어있지 않은 상태로 다른 url로 접속할 경우 -영민
  if (props.toLogin) {
    window.alert("로그인이 필요합니다!");
    history.replace("/login");
  }

  // 로그인 페이지에서 header, sidenav를 숨기기 위한 -영민
  if (userinfo) {
    return <>{props.children}</>;
  }

  
  return <></>;
};
//로그인 유무에 따라 true false 줄 예정

export default Permit;
