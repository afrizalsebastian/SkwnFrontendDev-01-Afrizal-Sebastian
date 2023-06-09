import Navbar from "./component/Navbar";
import "./assets/css/App.css";
import Jumbotron from "./component/Jumbotron";
import About from "./component/About";
import Sponsor from "./component/Sponsor";
import Categories from "./component/Categories";
import Product from "./component/Product";
import Email from "./component/Email";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Sponsor />
      <Categories />
      <Product />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
