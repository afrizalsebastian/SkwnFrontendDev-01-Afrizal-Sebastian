import Navbar from "./component/Navbar";
import "./assets/css/App.css";
import Jumbotron from "./component/Jumbotron";
import About from "./component/About";
import Sponsor from "./component/Sponsor";
import Categories from "./component/Categories";
import Product from "./component/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Sponsor />
      <Categories />
      <Product />
    </div>
  );
}

export default App;
