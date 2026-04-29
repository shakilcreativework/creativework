import React from 'react';
import Container from '../../shared/Container/Container';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <div className='py-20'>
            <Container>
                <div className='space-y-20'>
                    <ProjectCard />
                    <ProjectCard orderRowOne={'md:order-1'} orderRowTwo={'md:order-2'} iframeUrl='https://keen-keeper-website.netlify.app/' />
                    <ProjectCard iframeUrl='https://rococo-salamander-digitools.netlify.app/' />
                </div>
            </Container>
        </div>
    );
};

export default Projects;