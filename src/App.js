import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import AuthLogin from "./components/Auth/AuthLogin";
import AuthCreateAccount from "./components/Auth/AuthCreateAccount";
import "./App.scss";

const App = () => {
  return (
    <Switch>
      <div className="main">
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/login">
          <AuthLogin />
        </Route>
        <Route path="/create-account">
          <AuthCreateAccount />
        </Route>
      </div>
    </Switch>
  );
};

export default App;
