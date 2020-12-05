import React from 'react';
import Web_developer from './web-developer.jpg';
import LetsConnect from './lets-connect-1.png';
import './about.css';
//-----------------------//
import cell from './cell.jpg';
import email from './email.png';
import codeWarsLogo from './codewarslogo1.png';
import freeCodeCampLogo from './freeCodeCampLogo.png';
import hackerrankLogo from './hackerrankLogo.png';
import githubLogo from './githubLogo.png';
import linkedInLogo from './linkedInLogo.png';
//-----------------------//
import { DataContext } from '../../App';

const About = function() {
  const personalInfo = React.useContext(DataContext).personalInfo;
  return (
    <div id='main-div'>
      <div className='aboutDiv'>
        <div>
          <h1>
            GET TO <br /> KNOW ME{' '}
          </h1>
        </div>
        <div>
          <p>
            I am a full stack web developer based in Palestine. I am an
            intrinsically motivated person aiming to excel in life and the
            software industry along side with the people around me.
            <br />
            New experiences and challenges are my thing and I enjoy turning big
            scary problems into little simple things. I've also studied
            Mechanical Engineering which added to my people skills duo to the
            interactive working environment and made problem solving an everyday
            thing.
            <br />
            When I am not coding, I am usually poking around into either one of
            two worlds, <span className='color2'>Movies and TV</span> or
            <span className='color2'> anything with wheels and an engine.</span>
            .
          </p>
        </div>
        <div></div>
      </div>
      <div className='aboutDiv'>
        <div>
          <h2 className='color2'>Geek stuff</h2>
          <p>
            I am a graduate of PLUS program which is the result of partnership
            between AneraOrg and RBK to produce job-ready full stack web
            developers.
          </p>
          <h5 className='color2'>Technical skills</h5>
          <ul>
            <li>
              <span className='color2'>-</span> Advanced problem solving skills.
            </li>
            <li>
              <span className='color2'>-</span> Handles both front and back end
              development (superpowers in Backend).
            </li>
            <li>
              <span className='color2'>-</span> Constantly developing skills (
              currently learning python, devTools and more frameworks.
            </li>
            <li>
              <span className='color2'>-</span> A team player and oriented
              towards the scrum workflow.
            </li>
          </ul>
          <p>
            I fill my free time on sites such as{' '}
            <a
              className='color2'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.freecodecamp.org/fcc7b717385-d10b-49fd-a5d1-f7ca0f959a28'
            >
              FreeCodeCamp
            </a>
            ,{' '}
            <a
              className='color2'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.codewars.com/users/NasrShamalkh'
            >
              CodeWars
            </a>{' '}
            ,{' '}
            <a
              className='color2'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.hackerrank.com/NasrShamalkh'
            >
              Hackerrank
            </a>{' '}
            and many others, where I enjoy solving coding challenges and
            learning new stuff.
          </p>
          <span>If you're interested in knowing me more: </span>
          <a
            href={personalInfo.cvLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>View my CV</button>
          </a>
        </div>
        <div id='developerImageDiv'>
          <img className='img300' alt='web developer' src={Web_developer}></img>
        </div>
      </div>
      <div id='contactMe' className='aboutDiv'>
        <div>
          <img alt='lets connect' className='img300' src={LetsConnect} />
        </div>
        <div id='contact1'>
          <ul>
            <li>
              <img
                alt='cell phone icon'
                className='contactImage1'
                src={cell}
              ></img>{' '}
              <span>{personalInfo.phoneNumber}</span>
            </li>
            <li>
              <img
                alt='email icon'
                id='emailImage'
                className='contactImage2'
                src={email}
              ></img>{' '}
              <span> {personalInfo.email}</span>
            </li>
          </ul>
        </div>
        <div id='contact2'>
          <ul>
            <li>
              <a
                href={personalInfo.gitHubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img alt='Github logo' id='githubLogo' src={githubLogo} />
              </a>
            </li>
            <li>
              <a
                href={personalInfo.linkedInLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img alt='linkedin logo' id='linkedInLogo' src={linkedInLogo} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id='lastDiv' className='aboutDiv'>
        <h5>
          <i>Also find me here...</i>
        </h5>
        <ul>
          <li>
            <a
              href='https://www.hackerrank.com/NasrShamalkh'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='hackerrank logo'
                id='hackerrankLogo'
                src={hackerrankLogo}
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.codewars.com/users/NasrShamalkh'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img alt='codeWars logo' id='codeWarsLogo' src={codeWarsLogo} />
            </a>
          </li>
          <li>
            <a
              href='https://www.freecodecamp.org/fcc7b717385-d10b-49fd-a5d1-f7ca0f959a28'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='freeCodeCamp logo'
                id='freeCodeCampLogo'
                src={freeCodeCampLogo}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
