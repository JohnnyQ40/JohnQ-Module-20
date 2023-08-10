import React from 'react';
import Project from './Project';
import project1Image from '../assets/images/project1.png'
import project2Image from '../assets/images/project2.png'
import project3Image from '../assets/images/project3.png'
import project4Image from '../assets/images/project4.png'
import project5Image from '../assets/images/project5.png'

const projects = [
    { title: 'Film Face Off', img: project1Image, deployLink: 'https://francisjung.github.io/Film_Face_Off/', repoLink: 'https://github.com/Francisjung/Film_Face_Off/'},
    { title: 'Rock Paper Showdown', img: project2Image, deployLink: '#', repoLink: '#'},
    { title: 'Password Generator', img: project3Image, deployLink: 'https://johnnyq40.github.io/JohnQ-Module-3/', repoLink: 'https://github.com/JohnnyQ40/JohnQ-Module-3'},
    { title: 'JS quiz', img: project4Image, deployLink: 'https://johnnyq40.github.io/JohnQ-Module-4/', repoLink: 'https://github.com/JohnnyQ40/JohnQ-Module-4/'},
    { title: 'Schedule Builder', img: project5Image, deployLink: 'https://johnnyq40.github.io/JohnQ-Module-5/', repoLink: 'https://github.com/JohnnyQ40/JohnQ-Module-5'},
    { title: 'Project 3 (in progress)', img: project1Image, deployLink: '#', repoLink: '#'},
];

function Portfolio() {
    return (
        <section>
            {projects.map((project, index) => <Project key={index} {...project} />)}
        </section>
    );
}

export default Portfolio;