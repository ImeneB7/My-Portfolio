import React, { useState, useEffect } from "react";
import data from '../../datas/data.json';
import arrowLeft from '../../assets/img/arrow_left.png';
import arrowRight from '../../assets/img/arrow_right.png';
import '../Slider/_slider.scss';

const Slider = () => {
    const [specificProjects, setSpecificProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => { 
                const filteredProjects = data.filter(
                    project => project.id === "project5" || project.id === "project9"
                );
                setSpecificProjects(filteredProjects);  
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specificProjects.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? specificProjects.length - 1 : prevIndex - 1
        );
    };

    if (specificProjects.length === 0) {
        return <div>Chargement...</div>;
    }


    return ( 
        <div className="home-slider">
            <div className="slider-content">
                <div className="slider-main">
                    <img src={`${process.env.PUBLIC_URL}${specificProjects[currentIndex].cover}`}
                    alt={specificProjects[currentIndex].title} />
                    <div className="slider-overlay">
                        <h2>{specificProjects[currentIndex].title}</h2>
                        <p>{specificProjects[currentIndex].mission}</p>
                    </div>
                </div>
                <div className="slider-controls">
                    <button onClick={goToPrev} className="arrow prev">
                        <img src={arrowLeft} alt="Previous" />
                    </button>
                    <button onClick={goToNext} className="arrow next">
                        <img src={arrowRight} alt="Next" />
                    </button>
                </div>
            </div>
            <div className="thumbnails">
                {specificProjects.map((project, index) => (
                    <div 
                        key={project.id}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src={`${process.env.PUBLIC_URL}${project.cover}`} alt={project.title} />
                        <span>{project.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
