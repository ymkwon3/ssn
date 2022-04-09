import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";

import Flex from "../elements/Flex";
import Header from "../components/Header";
import Main from "../components/Main";
import Permit from "./Permit";
import User from "../components/User";
import SideNav from "../components/SideNav";

function App() {
  return (
    <Flex fd="column" width="100vw" height="100vh">
      <ConnectedRouter history={history}>
        <Flex width="100%" height="100%" fd="column" jc="start" ai="start">
          <Permit>
            {/*Header*/}
            <Header></Header>
          </Permit>

          <Flex height="100%">
            <Permit>
              {/*SideNav*/}
              <SideNav></SideNav>
            </Permit>

            {/*Content*/}
            <Route path="/login" exact component={Login}></Route>
            <Route path="/" exact component={Main}></Route>
            <Route path="/userid" exact component={User}></Route>
            {/* <Main/> */}
          </Flex>
        </Flex>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
