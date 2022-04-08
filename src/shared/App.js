import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

import Home from "../pages/Home";
import Login from "../pages/Login";

import Flex from "../elements/Flex";
import Main from "../components/Main";
import Permit from "./Permit";
import User from "../components/User";

function App() {
  return (
    <Flex fd="column" width="100vw" height="100vh">
      <ConnectedRouter history={history}>
        <Flex width="100%" height="100%" fd="column" jc="start" ai="start">
          <Permit>
            {/*Header*/}
            <Flex width="100%" height="100px" border="1px solid black">
              <div>버튼1</div>
              <div>버튼2</div>
            </Flex>
          </Permit>

          <Flex height="100%">
            <Permit>
              {/*SideNav*/}
              <Flex width="200px" height="100%" border="1px solid red">
                123123
              </Flex>
            </Permit>

            {/*Content*/}
            <Route path="/login" exact component={Login}></Route>
            <Route path="/" exact component={Main}></Route>
            <Route path="/test" exact component={User}></Route>
            {/* <Main/> */}
          </Flex>
        </Flex>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
