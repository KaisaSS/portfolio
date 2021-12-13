import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Banner} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
