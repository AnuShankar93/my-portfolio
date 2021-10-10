import React from 'react';
import { SkillsData } from '../../../../../data/skillData';
import './skills.css';
import Separator from '../../../../../components/separator/Separator';
import SkillCard from './skill-card/SkillCard';

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default Skills
