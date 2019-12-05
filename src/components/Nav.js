import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Organs from "./Organs";
import Search from "./Search";
import Login from "./Login";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function Nav() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <nav>
          <ul>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/organs">سازمان ها</Link>
            </li>
            <li>
              <Link to="/search">جستجوی پیشرفته</Link>
            </li>
            <li>
              <Link to="/login">عضویت</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/organs" exact>
            <Organs />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Nav;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));
