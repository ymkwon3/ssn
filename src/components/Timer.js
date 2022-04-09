import moment from "moment";
import React, { useEffect } from "react";
import Flex from "../elements/Flex";

const Timer = props => {
  const now = moment();
  const [time, setTime] = React.useState(now.format("HH:mm:ss"));

  console.log()
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(now.add(1, "seconds").format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Flex border="2px solid purple">
      {time}
    </Flex>
  );
};

export default Timer;
