import React from 'react'
import './work.css';
import Separator from '../../../../../components/separator/Separator';
import WorkCard from './work-card/WorkCard';
import { WorkData } from '../../../../../data/workData';

const Work =() => {
    const data = WorkData;
    return (
        <div className="work">
        <Separator />
        <label className="section-title">Work</label>
        <div className="work-list">
          {data.map((item) => {
            return <WorkCard item={item} />;
          })}
        </div>
      </div>
    )
}

export default Work
