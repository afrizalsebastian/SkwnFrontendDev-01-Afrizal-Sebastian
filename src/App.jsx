import { useState } from "react";
import Navbar from "./component/Navbar";
import "./assets/css/App.css";
import Jumbotron from "./component/Jumbotron";
import About from "./component/About";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
    </div>
  );
}

export default App;
