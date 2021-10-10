import React from 'react';
import './contact.css';
import Separator from '../../../../../components/separator/Separator';
import SocialContact from '../../../../../components/social-contact/SocialContact';

const Contact = () => {
    return (
        <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../../../assets/AnuShankarJSResume.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
    )
}

export default Contact
