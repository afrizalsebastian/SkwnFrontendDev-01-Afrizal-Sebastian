import { useState } from "react";
import Navbar from "./component/Navbar";
import "./assets/css/App.css";
import Jumbotron from "./component/Jumbotron";
import About from "./component/About";
import Sponsor from "./component/Sponsor";
import Recomendation from "./component/Recomendation";
import Categories from "./component/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Sponsor />
      <Categories />
    </div>
  );
}

export default App;
