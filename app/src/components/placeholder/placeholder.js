import React from "react";
import "./style.css";
import "./style-apple.css";
import facebookIcon from "../../assets/social-links/fb-icon.svg";
import instagramIcon from "../../assets/social-links/ig-icon.svg";
import twitterIcon from "../../assets/social-links/ttr-icon.svg";
import linkedinIcon from "../../assets/social-links/lnk-icon.svg";
import discordIcon from "../../assets/social-links/dc-icon.svg";
import mailgo from "mailgo";
import { isMacOs, isIOS } from "react-device-detect";

const placeholder = () => {
    mailgo();
    const socials = [
        {
            name: "facebook",
            icon: facebookIcon,
            link: "https://www.facebook.com/sfhacks/",
        },
        {
            name: "instagram",
            icon: instagramIcon,
            link: "https://www.instagram.com/sf.hacks/?hl=en",
        },
        {
            name: "discord",
            icon: discordIcon,
            link: "https://discord.gg/sxQjq7SjjW",
        },
        {
            name: "linkedin",
            icon: linkedinIcon,
            link: "https://www.linkedin.com/company/sf-hacks-sfsu/",
        },
        {
            name: "twitter",
            icon: twitterIcon,
            link: "https://twitter.com/sf_hacks?lang=en",
        },
    ];

    if (isMacOs || isIOS)
        return (
            <div className="placeholder-container-mac">
                <div className="heading-container-mac">
                    <div className="main-heading-mac">SF HACKS</div>
                    <div id="sub-heading-mac">
                        SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP
                        DISCOVER WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                    </div>
                </div>

                <div className="heading-container-resp-mac">
                    <div className="main-heading-resp1-mac">SF</div>
                    <div className="main-heading-resp2-mac">HACKS</div>
                    <div className="sub-resp-cont-mac">
                        <div id="sub-heading-resp-mac" className="scrolling-mac">
                            SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP
                            DISCOVER WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                        </div>
                    </div>
                </div>

                <div className="sub-info-mac">
                    <div className="info-question-mac">what do we do?</div>
                    <div className="info-answer-mac">we represent an ambitious inclusive community and empower them.</div>
                </div>

                <div className="coming-soon-mac">MORE COMING SOON</div>
                <div className="footer-mac">
                    <div className="footer-style-mac">
                        {socials.map((social) => (
                            <div key={social.name}>
                                <a href={social.link} target="_blank" rel="noreferrer">
                                    <img src={social.icon} className="social-icons-mac" alt="" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="footer-email-mac">
                        <span className="resp-footer-mac">|</span>
                        <a class="light-mac" href="mailto:sfhacksteam@gmail.com">
                            sfhacksteam@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        );
    return (
        <div className="placeholder-container">
            <div className="heading-container">
                <div className="main-heading">SF HACKS</div>
                <div id="sub-heading">
                    SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP DISCOVER
                    WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                </div>
            </div>

            <div className="heading-container-resp">
                <div className="main-heading-resp1">SF</div>
                <div className="main-heading-resp2">HACKS</div>
                <div className="sub-resp-cont">
                    <div id="sub-heading-resp" className="scrolling">
                        SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP
                        DISCOVER WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                    </div>
                </div>
            </div>

            <div className="sub-info">
                <div className="info-question">what do we do?</div>
                <div className="info-answer">we represent an ambitious inclusive community and empower them.</div>
            </div>

            <div className="coming-soon">MORE COMING SOON</div>
            <div className="footer">
                <div className="footer-style">
                    {socials.map((social) => (
                        <div key={social.name}>
                            <a href={social.link} target="_blank" rel="noreferrer">
                                <img src={social.icon} className="social-icons" alt="" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="footer-email">
                    <span className="resp-footer">|</span>
                    <a class="light" href="mailto:sfhacksteam@gmail.com">
                        sfhacksteam@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default placeholder;