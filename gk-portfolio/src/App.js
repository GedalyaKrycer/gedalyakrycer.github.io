import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <TopNavbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
