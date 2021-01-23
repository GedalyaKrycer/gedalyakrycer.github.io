import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedinIn, FaDev, FaReact, FaFigma } from 'react-icons/fa';
import './footer.css';
import resumeFile from "../../../gedalya-krycer-resume.pdf";


function Footer() {
    return (
        <footer >
            <div className="footer__content-container">
                <LinkContainer to="/">
                    <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo.svg" alt="GK Logo" className="footer__logo" />
                </LinkContainer>


                <a
                    href={resumeFile}
                    download={true}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__resume "><h6>View Resume</h6></a>


                <div className="footer__social-icons-container">
                    <a href="https://www.linkedin.com/in/gedalyakrycer/" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaLinkedinIn /></a>
                    <a href="https://github.com/GedalyaKrycer" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaGithub /></a>
                    <a href="https://dev.to/gedalyakrycer" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaDev /></a>

                </div>
            </div>


            <a href="https://github.com/GedalyaKrycer/gedalyakrycer.github.io" target="_blank" rel="noopener noreferrer" className="footer__built-with"><h6>Built with <span role="img" className="footer__emoji" aria-label="Sparkling Heart">💖</span> <FaReact className="footer__react" /><FaFigma className="footer__figma" /> </h6></a>




        </footer>
    )
}


export default Footer;