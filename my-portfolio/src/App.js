import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;
