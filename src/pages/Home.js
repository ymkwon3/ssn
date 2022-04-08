import React from "react";
import { Route } from "react-router-dom";

import Main from "../components/Main";
import Flex from "../elements/Flex";
import Login from "./Login";
import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

const Home = ({props, match}) => {
  console.log(match.path)
  return (
    <Flex width="100%" height="100%" fd="column" jc="start" ai="start">
      {/*Header*/}
      <Flex
        width="100%"
        height="100px"
        border="1px solid black"
      >
        <div>버튼1</div>
        <div>버튼2</div>
      </Flex>

      <Flex height="100%">
        {/*SideNav*/}
        <Flex
          width="200px"
          height="100%"
          border="1px solid red"
        >123123</Flex>
        <Link to="/main">1</Link>
        <Link to="/main/1">2</Link>

        {/*Content*/}
        <Route path={match.path} exact component={Main}></Route>
        <Route path={`${match.path}/1`} component={Login}></Route>
        {/* <Main/> */}
      </Flex>
    </Flex>
  );
};

export default Home;
