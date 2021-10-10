import React from 'react'
import Separator from '../../../../../components/separator/Separator';
import { ProjectData } from '../../../../../data/projectData';
import ProjectCard from './project-card/ProjectCard';
import './project.css';

const Projects = () => {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) =>{
                    return <ProjectCard project={project}/> 
                })}
            </div>
        </div>
    )
}

export default Projects
