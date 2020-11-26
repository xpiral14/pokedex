/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
