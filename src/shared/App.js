import './App.css';
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

import Home from '../pages/Home';
import Login from '../pages/Login';

import Flex from '../elements/Flex';

function App() {
  return (
    <Flex fd="column" width="100vw" height="100vh">
      <ConnectedRouter history={history}> 
        <Route path="/login" exact component={Login}></Route>
        <Route path="/main" exact component={Home}></Route>
      </ConnectedRouter>
    </Flex>
  );
}

export default App;
