import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Organs from "./Organs";
import Search from "./Search";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <BrowserRouter>
      <div className="Nav">
        <Route
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="خانه" component={Link} to="/" />
                <Tab label="سازمان ها" component={Link} to="/organs" />
                <Tab
                  label="جستجوی پیشرفته"
                  href="#basic-tabs"
                  component={Link}
                  to="/search"
                />
                <Tab label="عضویت" component={Link} to="/login" />
              </Tabs>
              <Switch>
                <Route path="/organs" exact render={() => <Organs />} />
                <Route path="/login" exact render={() => <Login />} />
                <Route path="/search" exact render={() => <Search />} />
                <Route path="/" exact render={() => <Home />} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
export default Nav;

const rootElement = document.getElementById("root");
ReactDOM.render(<Nav />, rootElement);
