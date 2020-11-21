import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Jobs from "../pages/Jobs";

const Main = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/about/" component={About} />
    <Route exact={true} path="/experience/" component={Jobs} />
    <Route exact={true} path="/projects/" component={Projects} />
    <Route exact={true} path="/blog/" component={Blog} />
    <Route exact={true} path="/contact/" component={Contact} />
  </Switch>
);

export default Main;
