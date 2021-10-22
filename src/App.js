import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Pages/Auth";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Greet from "./components/Pages/Greet";
import Layout from "./components/Pages/Layout";

import "./App.scss";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact>
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/greet">
          <Greet />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Layout>
    </Switch>
  );
};

export default App;
