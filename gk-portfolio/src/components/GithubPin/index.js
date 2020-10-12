import React from 'react';
import './style.css';
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';


function GithubPin() {
    return (
        <div className="githubPin">
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