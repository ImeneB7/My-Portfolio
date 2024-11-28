import React from "react";
import './_projectmodal.scss'

const ProjectModal = ({project, onClose}) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{project.title}</h2>
                <img src={`${process.env.PUBLIC_URL}${project.cover}`} alt={project.alt || "Image du projet"} />
                <p>{project.description}</p>
                <p>{project.mission}</p>
                <div className="skills">
                    <h3>Compétences: {project.tags}</h3>
                    <div className="skill-icons">
                        {project.tags.map((tag) => (
                            project.logos[tag] && (
                                <img
                                key={tag}
                                src={`${process.env.PUBLIC_URL}${project.logos[tag]}`}
                                alt={`${tag} logo`}
                                title={tag}
                                className="skill-icon"
                                />
                            )
                        ))}
                    </div>
                </div>
                    <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button">Voir le code</a>
            </div>
        </div>
    )
}

export default ProjectModal;