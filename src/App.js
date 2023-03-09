import Forgot from "./pages/Forgot/Forgot";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import CoursePage from "./pages/CoursePage/CoursePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profile from "./pages/profile/Profile";


function App() {
  const {user} = useContext(AuthContext);
  return (

       <Router>
        <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/logout">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {<Register />}
        </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="8800/users/:username">
            <Profile />
          </Route>
          <Route path="/courses">
          <CoursePage />
        </Route>
        </Switch>
       </Router>
    
  );
}

export default App;
