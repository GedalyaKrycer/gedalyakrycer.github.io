import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioProvider } from './utils/PortfolioContext';
import Home from "./pages/Home";
import GithubPin from "./components/GithubPin";
import ContactPin from "./components/ContactPin";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';
import { gsap } from "gsap";


function App() {
  // Google Analytics Page Tracking
  useEffect(() => {
    ReactGA.initialize('UA-122656834-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  // GSAP ANIMATIONS
  const tl = gsap.timeline();

  // Ref for right pin border
  const rightPinRef = useRef(null);

  // Ref for left pin border
  const leftPinRef = useRef(null);

  useEffect(() => {

    tl.from(rightPinRef.current, {
      duration: 1,
      autoAlpha: 0,
      x: 20,
      ease: 'back.out(2)',
      delay: 1.3
    })

    tl.from(leftPinRef.current, {
      duration: 1,
      autoAlpha: 0,
      x: -20,
      ease: 'back.out(2)',
    }, '-=1.3')


  }, [tl])


  return (
    <Router>
      <PortfolioProvider>
        <TopNavbar />

        <main>
          <div className="g__frame-left" ref={leftPinRef}></div>
          <GithubPin />
          <div className="g__frame-right" ref={rightPinRef}></div>
          <ContactPin />
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <NotFound />
          </Switch>
        </main>

        <Footer />
      </PortfolioProvider>
    </Router>
  );
}

export default App;
