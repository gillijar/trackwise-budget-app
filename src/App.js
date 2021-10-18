import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Pages/Auth";
import "./App.scss";

const App = () => {
  return (
    <Switch>
      <div className="main">
        {" "}
        {/* Needs replaced with a layout later that accepts children as props */}
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </div>
    </Switch>
  );
};

export default App;
