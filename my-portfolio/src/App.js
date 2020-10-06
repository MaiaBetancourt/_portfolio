import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

function Portfolio() {
  return <h1>Welcome to portfolio!!!</h1>;
}

function Contact() {
  return <h1>Welcome to Contact!!!</h1>;
}

export default App;
