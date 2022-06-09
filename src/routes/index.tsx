import { Switch } from "react-router-dom";

import Home from "../pages/home/index";
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Route from "./router";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Home} isPrivate />
    </Switch>
  );
};

export default Routes;
