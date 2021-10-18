import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Pages/Auth";
import Greet from "./components/Pages/Greet";
import PieChart from "./components/Pages/PieChart";
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
        <Route path="/greet">
          <Greet />
        </Route>
        <Route path="/test">
          <PieChart />
        </Route>
      </div>
    </Switch>
  );
};

export default App;
