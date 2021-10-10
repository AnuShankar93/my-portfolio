import React from 'react'
import './about.css';
import codeImg from '../../../../../assets/image/coding.png';
import SocialContact from '../../../../../components/social-contact/SocialContact';

const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Creative web developer offering <br />over <span className="info-name">5 years </span>of experience in designing <br /> and developing user interfaces, and
                    integration <br /> with backend technologies. <br />Proven ability in optimizing web functionalities <br />that improve data retrieval
                    and workflow efficiencies.<br /> Hands-on experience in <span className="info-name">Angular /React + Redux</span>

                </div>
                <div className="about-photo">
                    <img src={codeImg} className="code-img" alt="code-img" />
                </div>
            </div>
            <div className="about-bottom">

            </div>
            <SocialContact/>
        </div>
    )
}

export default About;
