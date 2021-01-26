import React, { useState } from 'react';
import './articleThumbnail.css';
import bgImg from './bg.jpeg'

const ArticleThumbnail = ({ articleUrl }) => {

    // Intern States
    const [isHovering, setIsHovering] = useState(false);

    // Styles For Elements Effected By Hover
    const atMainSectionImgStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 66.51%, rgba(0, 0, 0, 0.31) 100%), url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transform: isHovering ? "scale(1.1)" : "scale(1)",
        opacity: isHovering ? 1 : 0,
        // visibility: isHovering ? "visible" : "hidden",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        transition: 'all 0.5s cubic-bezier(.8,.02,.52,1)'
    }

    const atTitle = {
        opacity: isHovering ? 0 : 1,
        transform: isHovering ? "scale(1.1)" : "scale(1)",
        color: "white",
        fontWeight: 500,
        lineHeight: "22px",
        position: 'absolute',
        top: isHovering ? 20 : 15,
        left: 18,
        right: 18,
        zIndex: 2,
        transition: 'all 0.5s cubic-bezier(.8,.02,.52,1)'
    }

    const atCTASectionStyle = {
        display: "flex",
        visibility: isHovering ? "visible" : "hidden",
        alignItems: 'center',
        position: 'absolute',
        left: 12,
        top: 5
    }

    const atMetaTag = {
        // display: isHovering ? "none" : "block",
        opacity: isHovering ? 0 : 1,
        transform: isHovering ? "translateX(5px)" : "translateX(0)",
        transition: 'all 0.5s cubic-bezier(.8,.02,.52,1)'
    }

    const atCtaText = {
        opacity: isHovering ? 1 : 0,
        transform: isHovering ? "translateX(5px)" : "translateX(0)",
        transition: 'all 0.5s cubic-bezier(.8,.02,.52,1)'
    }

    const atCtaIcon = {
        opacity: isHovering ? 1 : 0,
        transform: isHovering ? "translateX(5px)" : "translateX(0)",
        transition: 'all 0.7s cubic-bezier(.8,.02,.52,1)'
    }

    return (
        <a
            href={articleUrl}
            onMouseEnter={() => setIsHovering(prevState => !prevState)}
            onMouseLeave={() => setIsHovering(prevState => !prevState)}
            className="articleThumbnail"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="at__main-section">
                <h4 style={atTitle}>5 Remarkable React Router Features (Anchor Links, Query Params & more)</h4>
                <div style={atMainSectionImgStyle}></div>

            </div>
            <div className="at__meta-section">
                <div className="at__meta-left-group">
                    <p
                        style={atMetaTag}
                        className="at__meta-tag">todayilearned</p>
                    <div style={atCTASectionStyle}>
                        <h5
                            style={atCtaText}
                            className="at__cta-text"
                        >Read article</h5>
                        <svg
                            style={atCtaIcon}
                            className="at__cta-icon"
                            viewBox="0 0 7 6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0.680062 0.921049L0.637741 0.388228C0.619822 0.162619 0.787741 -0.00530041 1.01225 0.0137238L5.67673 0.383019C5.90234 0.400939 6.09924 0.597834 6.11586 0.822147L6.48645 5.48793C6.50437 5.71354 6.33645 5.88146 6.11195 5.86244L5.57913 5.82012C5.35112 5.80201 5.15255 5.59901 5.13924 5.37139L4.98336 2.55311L1.80836 5.72811C1.66143 5.87503 1.40462 5.85464 1.23234 5.68235L0.817824 5.26784C0.645541 5.09555 0.625143 4.83874 0.772073 4.69181L3.94707 1.51682L1.12879 1.36094C0.900058 1.34873 0.697067 1.15016 0.680062 0.921049Z" />
                        </svg>

                    </div>
                </div>

                <div className="at__reaction-wrapper">
                    <p className="at__reaction-text">500</p>
                    <svg
                        className="at__reaction-icon"
                        viewBox="0 0 11 11"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.84843 1.22128C8.60664 0.136749 6.68808 0.299651 5.5 1.55601C4.31191 0.299651 2.39336 0.134517 1.15156 1.22128C-0.46406 2.63384 -0.227732 4.93678 0.92383 6.15743L4.69219 10.1452C4.90703 10.3728 5.19492 10.5 5.5 10.5C5.80723 10.5 6.09297 10.375 6.30781 10.1474L10.0762 6.15966C11.2256 4.93901 11.4662 2.63607 9.84843 1.22128V1.22128ZM9.3414 5.4054L5.57305 9.39316C5.52148 9.44671 5.47851 9.44671 5.42695 9.39316L1.65859 5.4054C0.874416 4.57527 0.715432 3.00427 1.81543 2.04248C2.65117 1.31277 3.94023 1.42211 4.74805 2.27679L5.5 3.07345L6.25195 2.27679C7.06406 1.41765 8.35312 1.31277 9.18457 2.04025C10.2824 3.00204 10.1191 4.58197 9.3414 5.4054V5.4054Z" />
                    </svg>

                </div>

                <p className="at__publish-data">1/24/21</p>
            </div>

        </a>
    )
}

export default ArticleThumbnail;
