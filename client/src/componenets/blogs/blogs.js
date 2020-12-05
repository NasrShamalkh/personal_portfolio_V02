import React from 'react';
import './blogs.css';
import bloggerLogo from './bloggerLogo.jpg';
import { DataContext } from '../../App';

const Blogs = function() {
  const blogs = React.useContext(DataContext).blogs;
  const personalInfo = React.useContext(DataContext).personalInfo;
  return (
    <div>
      <h1 id='blogsHeader'>Have a look at some of my blogs</h1>
      <h3 id='jj'>
        Or you can visit my
        <a
          href={personalInfo.bloggerLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img alt='blogger logo' className='bloggerLogo' src={bloggerLogo} />
        </a>
        profile for more
      </h3>
      <div id='blogsContainer'>
        {blogs.length > 0
          ? blogs.map((blog, index) => {
              if (blog.showBlog) {
                return (
                  <div class='card' key={index}>
                    <div class='card-image waves-effect waves-block waves-light'>
                      <img
                        alt={`blog ${index} image`}
                        id='cardImage'
                        class='activator'
                        src={`https://drive.google.com/uc?export=view&id=${blog.imageID}`}
                      ></img>
                    </div>
                    <div class='card-content'>
                      <span class='card-title activator grey-text text-darken-4'>
                        {blog.name}
                      </span>
                      <p>
                        <a
                          href={blog.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Blog
                        </a>
                      </p>
                    </div>
                    <div class='card-reveal'>
                      <span class='card-title grey-text text-darken-4'>
                        {blog.name}
                        <i class='material-icons right'>close</i>
                      </span>
                      <p className='blackColor'>
                        {blog.description}
                        <a
                          href={blog.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='blueColor'
                        >
                          Continue reading >>
                        </a>
                      </p>
                    </div>
                  </div>
                );
              } else {
                return '';
              }
            })
          : ''}
      </div>
    </div>
  );
};
export default Blogs;
