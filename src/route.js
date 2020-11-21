import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";

const Main = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/experience" component={Jobs} />
    <Route path="/projects" component={Projects} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
  </>
);

export default Main;
