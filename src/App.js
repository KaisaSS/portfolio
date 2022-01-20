import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import ScrollToTop from "./components/navbar/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
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
