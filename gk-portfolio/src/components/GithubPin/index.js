import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import './style.css';
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';


function GithubPin() {

      // Ref for github icons
      const githubContainerRef = useRef(null);

      
      // GSAP ANIMATIONS
      useEffect(() => {

      const tl = gsap.timeline();
  
          tl.from(githubContainerRef.current, {
              duration: 1,
              autoAlpha: 0,
              x: -20,
              ease: 'back.out(2)',
              delay: 1.3
          })
  
  
      }, [])

      
    return (
        <div className="githubPin" ref={githubContainerRef}>
            <a
                href="https://www.linkedin.com/in/gedalyakrycer/"
                target="_blank"
                rel="noopener noreferrer"
                className="githubPin_link"
            >
                <FaLinkedinIn />
            </a>
            <a
                href="https://github.com/GedalyaKrycer"
                target="_blank"
                rel="noopener noreferrer"
                className="githubPin_link"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.behance.net/gedalyakrycer"
                target="_blank"
                rel="noopener noreferrer"
                className="githubPin_link"
            >
                <FaBehance />
            </a>

        </div>
    )
}


export default GithubPin;