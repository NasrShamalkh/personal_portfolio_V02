import React from 'react';
import './projects.css';
import githubLogo from './githubLogo.png';
import linkLogo from './linkLogo.png';
import videoLogo from './videoLogo.png';
import { DataContext } from '../../App';

const Projects = function() {
  const projects = React.useContext(DataContext).projects;
  console.log(projects);
  return (
    <div>
      <h1 id='projectsH1'>Checkout my latest work</h1>
      <h2 id='projectsH2'>
        If you have any concerns, I am more than happy to help
      </h2>
      <div id='projectsContainer'>
        {projects.length == 0
          ? ''
          : projects.map((project, index) => {
              console.log(project.showProject, '-----------------');
              if (project.showProject) {
                return (
                  <div class='card sticky-action' key={index}>
                    <div class='card-content'>
                      <span id='card-title-style' class='card-title activator'>
                        {project.name}
                      </span>
                    </div>
                    <div class='card-image waves-effect waves-block waves-light'>
                      <img
                        alt={`project ${index} image`}
                        id='cardImage'
                        class='activator'
                        src={`https://drive.google.com/uc?export=view&id=${project.imageID}`}
                      ></img>
                    </div>
                    <div class='card-action'>
                      <div className='card_action_area'>
                        <a
                          href={project.codeLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img class='githubLogo' src={githubLogo} alt='' />
                        </a>
                        {project.link ? (
                          <a
                            href={project.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img
                              class='card_actionLink'
                              src={linkLogo}
                              alt=''
                            />
                          </a>
                        ) : (
                          ''
                        )}
                        {project.demoLink ? (
                          <a
                            href={project.demoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img
                              class='card_actionLink'
                              src={videoLogo}
                              alt=''
                            />
                          </a>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                    <div class='card-reveal'>
                      <span className='blackColor' class='card-title'>
                        {project.name}
                        <i class='material-icons right'>close</i>
                      </span>
                      <p className='blackColor'>
                        {project.description} <br />
                        {project.role ? <span>Role: {project.role}.</span> : ''}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return '';
              }
            })}
      </div>
    </div>
  );
};
export default Projects;
