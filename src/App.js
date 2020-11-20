import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";
import Header from "./components/Header";
import Main from "./main/route";

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
