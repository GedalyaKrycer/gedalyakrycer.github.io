import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PortfolioProvider } from './utils/PortfolioContext';
import Home from "./pages/Home/Home";
import GithubPin from "./components/ui/LeftInfoPin/LeftInfoPin";
import ContactPin from "./components/ui/RightInfoPin/RightInfoPin";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import TopNavbar from "./components/ui/TopNavbar/TopNavbar";
import Footer from "./components/ui/Footer/Footer";
import ReactGA from 'react-ga';
import { gsap } from "gsap";


function App() {
  // Google Analytics Page Tracking
  useEffect(() => {
    ReactGA.initialize('G-2ZT8T2BMCQ');
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