import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../elements/Button";
import Flex from "../elements/Flex";
import { actionCreators as userActions } from "../redux/modules/user";

const Timer = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userinfo);
  let hour = 0,
    minute = 0,
    second = 0;
  if (user.connecting) {
    const start = moment(user.starttime);
    const now = moment();
    const duration = moment.duration(now.diff(start));

    let d = duration.asSeconds();
    hour = Math.floor(d / 3600);
    d %= 3600;
    minute = Math.floor(d / 60);
    d %= 60;
    second = Math.floor(d);
  }
  const [time, setTime] = React.useState(-99999);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkInOut = () => {
    if (user.connecting) {
      // 체크아웃
      dispatch(
        userActions.checkInOutMD(moment().format("YYYY-MM-DD HH:mm:ss"))
      );
    } else {
      // 체크인
      dispatch(
        userActions.checkInOutMD(moment().format("YYYY-MM-DD HH:mm:ss"))
      );
    }
  };

  return (
    <Flex border="2px solid purple" fd="column" gap="20px">
      {`${hour}시간 ${minute}분 ${second}초`}
      <Button width="200px" _onClick={() => checkInOut()}>
        출석체크
      </Button>
    </Flex>
  );
};

export default Timer;
