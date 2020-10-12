import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GithubPin from "./components/GithubPin";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';


function App() {
  // Google Analytics Page Tracking
  useEffect(() => {
    ReactGA.initialize('UA-122656834-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <Router>
      <TopNavbar />
        <GithubPin />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <NotFound />
      </Switch>

      <Footer />
     
    </Router>
  );
}

export default App;
