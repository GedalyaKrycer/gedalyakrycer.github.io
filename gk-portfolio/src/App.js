import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>

      <TopNavbar />
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
