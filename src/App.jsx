import { useState } from "react";
import Navbar from "./component/Navbar";
import "./assets/css/App.css";
import Jumbotron from "./component/Jumbotron";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
