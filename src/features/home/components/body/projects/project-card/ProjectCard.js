import React from 'react';
import './project-card.css';

const ProjectCard = ({project}) => {
    const {title,about,tags} = project;
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{title}</label>
                <p>{about}</p>
                <div className="project-tags">
                    {tags.map((tag)=> {
                        return <label className="tag">{tag}</label>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
