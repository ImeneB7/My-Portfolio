import React from "react";
import './_projectcard.scss';

const ProjectCard = ({cover, title, onClick}) => {
    
    return (
        <div className="project-card" onClick={onClick}>
             <img src={`${process.env.PUBLIC_URL}${cover}`} alt={title} />
            <div className="overlay">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default ProjectCard;
