import React from "react";
import Flex from "../elements/Flex";
import { history } from "../redux/configureStore";

const Header = props => {
  return (
    <Flex width="100%" height="100px" border="1px solid black">
      <button onClick={() => history.push("/")}>home</button>
      <button onClick={() => history.push("/userid")}>toUserID</button>
    </Flex>
  );
};

export default Header;
