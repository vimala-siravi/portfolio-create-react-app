import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";
import Header from "./components/Header";
import Main from "./route";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
