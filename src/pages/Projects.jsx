import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import data from '../datas/data.json';
import '../sass/_projects.scss';

//import data from '../datas/data.json';

const Projets = () => {
    const [projects, setProjects] =useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const [error] = useState(null);

    useEffect(() => {
            setProjects(data);
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null)
    };

   
    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
        <NavBar/>
            <div>
                {error && <div className="error-message">{error}</div>}
                <h2 className="projet_title">Projets</h2>
                <div className="container_project">
                    {projects.map((project) => ( // {data.slice(0,10).map((project) => ( si pas de back end
                        <ProjectCard
                            key={project.id}
                            cover={project.cover}
                            title={project.title}
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </div>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={closeModal}
                        />
                    )}
            </div>
           


        <Footer/>
        </>
    )
}

export default Projets;