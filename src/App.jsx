import { useState } from "react";
import Navbar from "./component/Navbar";
import "./assets/css/App.css";
import Jumbotron from "./component/Jumbotron";
import About from "./component/About";
import Sponsor from "./component/Sponsor";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Sponsor />
    </div>
  );
}

export default App;
