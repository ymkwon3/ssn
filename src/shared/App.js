import './App.css';
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

import Home from '../pages/Home';
import Login from '../pages/Login';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}> 
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
      </ConnectedRouter>
    </div>
  );
}

export default App;
