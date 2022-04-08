import React from "react";
import Flex from "../elements/Flex";

const Main = props => {
  return (
    <Flex border="2px solid blue" height="100%" fd="column" jc="space-around">
      <Flex>타이머</Flex>
      <Flex>출석체크버튼</Flex>
      <Flex>총공부시간 / 어제 몇시간 했네~</Flex>
      <Flex>2등 1등 3등</Flex>
    </Flex>
  );
};

export default Main;
