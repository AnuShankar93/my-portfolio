import React from 'react'
import './about.css';
import codeImg from '../../../../../assets/image/coding.png';
import SocialContact from '../../../../../components/social-contact/SocialContact';

const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                Hello There 👋, I am <br />
          <span className="info-name">Anu Shankar</span>.<br /> I love
          experimenting with the web and have hands-on <br/>experience in <span className="info-name">Angular /React + Redux</span>

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
