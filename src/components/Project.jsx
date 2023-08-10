import React from 'react';

function Project({ title, img, deployLink, repoLink }) {
    return (
        <div className="project">
            <h2 className="project-title">{title}</h2>
            <img src={img} alt={title} className="project-image" />
            
            <div className='project-links'>
                <a href={deployLink} className='project-link'>Deployed App</a>
                <a href={repoLink}  className='project-link'>Github Repo</a>
            </div>
        </div>
    );
}

export default Project;