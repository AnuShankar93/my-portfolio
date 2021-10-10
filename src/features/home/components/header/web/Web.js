import React from 'react'
import './web.css';

const Web = () =>{
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project">
                <i className="fi fi-rr-chart-histogram option-icon"/>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i className="fi fi-rr-laptop option-icon"/>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i className="fi fi-rr-briefcase option-icon"/> Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fi fi-rr-user option-icon"/> Contact
                </a>
            </div>
        </div>
    )
}

export default Web
