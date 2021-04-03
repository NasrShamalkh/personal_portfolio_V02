import React from 'react';
import './home.css';
import githubLogo from '../about/githubLogo.png';
import linkedinLogo from '../about/linkedInLogo.png';
import documentLogo from './documentLogo.png';
import { DataContext } from '../../App';

const Home = function() {
  const personalInfo = React.useContext(DataContext).personalInfo;
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const handleResize = e => {
    setWindowWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [windowWidth]);
  if (windowWidth < 700) {
    return (
      <div id='main-dev'>
        <div id='left-div'>
          <h1>
            <span className='font1'>Hi there, I am</span> <br />
            <span className='font2'>
              NASR
              <br /> SHAMALKH
            </span>
          </h1>
          <h2 className='font3'>BACKEND WEB DEVELOPER</h2>
        </div>
        <div id='right-div'>
          <img
            alt='Profile pic'
            className='nasrImage'
            src={`https://drive.google.com/uc?export=view&id=${personalInfo.imageID}`}
          ></img>
        </div>
        <div id='newDiv'>
          <div id='contactImageDiv'>
            <a
              href={personalInfo.gitHubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='Github logo'
                className='homeContactImage1'
                src={githubLogo}
              ></img>
            </a>
            <a
              href={personalInfo.linkedInLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='linkedin logo'
                className='homeContactImage2'
                src={linkedinLogo}
              ></img>
            </a>
            <a
              href={personalInfo.cvLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='Document logo'
                className='homeContactImage3'
                src={documentLogo}
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='main-dev'>
        <div id='left-div'>
          <h1>
            <span className='font1'>Hi there, I am</span> <br />
            <span className='font2'>
              NASR
              <br /> SHAMALKH
            </span>
          </h1>
          <h2 className='font3'>BACKEND WEB DEVELOPER</h2>
          <div id='contactImageDiv'>
            <a
              href={personalInfo.gitHubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='Github logo'
                className='homeContactImage1'
                src={githubLogo}
              ></img>
            </a>
            <a
              href={personalInfo.linkedInLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='linkedin logo'
                className='homeContactImage2'
                src={linkedinLogo}
              ></img>
            </a>
            <a
              href={personalInfo.cvLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='Document logo'
                className='homeContactImage3'
                src={documentLogo}
              ></img>
            </a>
          </div>
        </div>
        <div id='right-div'>
          <img
            alt='Profile pic'
            className='nasrImage'
            src={`https://drive.google.com/uc?export=view&id=${personalInfo.imageID}`}
          ></img>
        </div>
      </div>
    );
  }
};
export default Home;
