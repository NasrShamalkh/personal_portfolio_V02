import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './componenets/home/home.js';
import About from './componenets/about/about.js';
import NavBar from './componenets/navBar/navBar.js';
import Blogs from './componenets/blogs/blogs.js';
import Projects from './componenets/projects/projects.js';
import axios from 'axios';
import { AnimatedSwitch } from 'react-router-transition';
export const DataContext = React.createContext();

function App() {
  const [projects, setProjects] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const [personalInfo, setPersonalInfo] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('api/projects/')
        .then(result => {
          setProjects(result.data);
        })
        .catch(err => console.log('Error in fetching projects from api', err));
      //------------------//------//
      await axios
        .get('api/blogs')
        .then(result => {
          setBlogs(result.data);
        })
        .catch(err => console.log('Error in fetching blogs from api', err));
      //----------------//--------------//
      await axios
        .get('api/personalInfo')
        .then(result => {
          setPersonalInfo(result.data[0]);
        })
        .catch(err => console.log('Error in fetching personal info data', err));
    }
    fetchData();
  }, []);

  return (
    <Router>
      <DataContext.Provider
        value={{
          projects: projects,
          blogs: blogs,
          personalInfo: personalInfo
        }}
      >
        <NavBar />
        <AnimatedSwitch
          atEnter={{ opacity: 0.2 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route component={Home} exact path='/' />
          <Route component={About} exact path='/about' />
          <Route component={Blogs} exact path='/blogs' />
          <Route component={Projects} exact path='/projects' />
        </AnimatedSwitch>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
