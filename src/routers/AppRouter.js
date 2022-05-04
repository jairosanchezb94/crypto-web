import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Router>
        <div className="w-screen p-4 h-5/6 flex justify-center items-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:coinId" component={Detail} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default AppRouter;
