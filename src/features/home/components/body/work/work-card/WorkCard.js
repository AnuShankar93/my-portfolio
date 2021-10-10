import React from "react";
import "./work-card.css";
const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" alt="c-ie"/>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;