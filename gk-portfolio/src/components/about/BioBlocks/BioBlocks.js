import React, {useEffect, useState} from "react";
import './bioBlocks.css';
import axios from 'axios';
import companyIcon from './bio-block-icons/company-icon.svg';
import startFlagIcon from './bio-block-icons/start-flag-icon.svg';
import reactIcon from './bio-block-icons/react-tech-icon.svg';
import jsIcon from './bio-block-icons/js-tech-icon.svg';
import gitIcon from './bio-block-icons/git-tech-icon.svg';
import figmaIcon from './bio-block-icons/figma-tech-icon.svg';
import phpStormIcon from './bio-block-icons/phpstorm-tech-icon.svg';
import jiraIcon from './bio-block-icons/jira-tech-icon.svg';
import reactionIcon from './bio-block-icons/reaction-icon.svg';
import followerIcon from './bio-block-icons/follower-icon.svg';
import viewIcon from './bio-block-icons/view-icon.svg';
import codeDocIcon from './bio-block-icons/code-doc-icon.svg';
import firebaseIcon from './bio-block-icons/firebase-icon.svg';

// This is static top section of the page and gives it semantic value.
function BioBlocks() {

    // Local State
    const [articleCount, setArticlesCount] = useState([]);
    const [latestArticle, setLatestArticle] = useState([]);
    const [reactions, setReactions] = useState(0);

    useEffect(() => {

        axios.get('https://dev.to/api/articles?username=gedalyakrycer')
            .then(res => {
                setArticlesCount(res.data.length);
                setLatestArticle(res.data[0]);

                let reactionsArray = []

                res.data.forEach(article => {
                    reactionsArray.push(article.public_reactions_count);
                });

                const reactionsTotal = reactionsArray.reduce((accumulator, currentValue) => accumulator + currentValue)
                setReactions(reactionsTotal);
            })
            .catch(error => {
                console.log(error)
            })

        return () => {

        }

    }, [])

    // Created by https://stackoverflow.com/a/2686098/12817163
    const abbrNum = (number, decPlaces) => {
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10,decPlaces);

        // Enumerate number abbreviations
        const abbrev = [ "k", "m", "b", "t" ];

        // Go through the array backwards, so we do the largest first
        for (let i=abbrev.length-1; i>=0; i--) {

            // Convert array index to "1000", "1000000", etc
            const size = Math.pow(10,(i+1)*3);

            // If the number is bigger or equal do the abbreviation
            if(size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number*decPlaces/size)/decPlaces;

                // Handle special case where we round up to the next abbreviation
                if((number === 1000) && (i < abbrev.length - 1)) {
                    number = 1;
                    i++;
                }

                // Add the letter for the abbreviation
                number += abbrev[i];

                // We are done... stop
                break;
            }
        }

        return number;
    }


    const blogStatsData = [
        {
            stat: 'reactions',
            statNumber: abbrNum(reactions, 1) + '+',
            icon: reactionIcon,
        },
        {
            stat: 'followers',
            statNumber: '950+',
            icon: followerIcon,
        },
        {
            stat: 'views',
            statNumber: '28k+',
            icon: viewIcon,
        },
        {
            stat: 'articles',
            statNumber: articleCount,
            icon: codeDocIcon,
        },
    ];

    let statElements = [];

    blogStatsData.forEach(stat => {
        let singleStat = (
            <div className="block__blog-stat" key={stat.stat}>
                <img src={stat.icon} alt="Start checkered flag icon" className="block__icon-left" />
                <p className="block__stat-text">{stat.statNumber} <span className="block__stat-type">{stat.stat}</span></p>
            </div>
        )

        return statElements.push(singleStat)
    })

    const titleFormater = title => {
        const titleArray = title === undefined ? 'Loading...' : title.split('');
        return titleArray.length < 48 ? titleArray : titleArray.slice(0, 48).join('') + '...';
    }

    return (
        <section className="bio-blocks">
            <a className="block" href="https://workoutme.app/" rel="noopener noreferrer" target="_blank">
                <div className="block__header">
                    <h5>Working as a…</h5>
                    <h3>Junior React Native Developer</h3>
                </div>
                <div className="block__meta-container">
                    <div className="block__meta">
                        <img src={companyIcon} alt="Building icon" className="block__icon-left"/>
                        <p className="block__meta-text">WorkoutMe</p>
                    </div>
                    <div className="block__meta">
                        <img src={startFlagIcon} alt="Start checkered flag icon" className="block__icon-left" />
                        <p className="block__meta-text">2021</p>
                    </div>
                    <div className="block__meta">
                        <p className="block__meta-text block__work-cta">Visit</p>
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            className="block__icon-right"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.84305 1.279L5.33859 0.783465C5.54841 0.573643 5.8877 0.573643 6.09528 0.783465L10.4346 5.12052C10.6444 5.33034 10.6444 5.66963 10.4346 5.87722L6.09528 10.2165C5.88546 10.4263 5.54618 10.4263 5.33859 10.2165L4.84305 9.72097C4.631 9.50891 4.63546 9.16293 4.85198 8.95534L7.54171 6.39284L1.12653 6.39284C0.82966 6.39284 0.59082 6.154 0.59082 5.85713L0.59082 5.14284C0.59082 4.84597 0.82966 4.60713 1.12653 4.60713L7.54171 4.60713L4.85198 2.04463C4.63323 1.83704 4.62877 1.49105 4.84305 1.279Z" />
                        </svg>
                    </div>
                </div>
                <div className="block__tools">
                    <p>Using:</p>
                    <div className="blocks__tool-icons">
                        <img src={reactIcon} alt="React logo" />
                        <img src={jsIcon} alt="JavaScript logo" />
                        <img src={firebaseIcon} alt="FireBase logo" />
                        <img src={gitIcon} alt="Git logo" />
                        <img src={figmaIcon} alt="Figma logo" />
                        <img src={phpStormIcon} alt="PHPStorm logo" />
                        <img src={jiraIcon} alt="Jira logo" />
                    </div>
                </div>

            </a>
            <a className="block" href={latestArticle.url} rel="noopener noreferrer" target="_blank">
                <div className="block__header">
                    <h5>Read latest article...</h5>
                    <h3>{titleFormater(latestArticle.title)}</h3>
                </div>
                <div className="block__blog-container">
                    {statElements}
                </div>

            </a>
        </section>
    )
}


export default BioBlocks;
