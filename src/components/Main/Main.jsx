import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button } from '../Button/';
import { Container } from './style';
import Git from '../../../public/icons/git.svg?component';
import Insta from '../../../public/icons/insta.svg?component';
import Linkedin from '../../../public/icons/linkedin.svg?component';

export const Main = () => {
  const mainRef = useRef();
  const [currentTop, setCurrentTop] = useState(93);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });
  }, [currentTop]);

  const handleScroll = () => {
    const header = document.getElementById('header');
    const headerMobile = document.getElementById('header-mobile');

    let pageYoffset = mainRef.current.getBoundingClientRect().top;
    if (pageYoffset == 0) {
      header.classList.remove('header-active');
      header.classList.add('header-original');
    } else if (currentTop < pageYoffset) {
      header.classList.add('header-active');
    } else {
      header.classList.remove('header-original');
      header.classList.remove('header-active');
    }

    if (pageYoffset == 0) {
      headerMobile.classList.remove('header-active');
      headerMobile.classList.add('header-original');
    } else if (currentTop < pageYoffset) {
      headerMobile.classList.add('header-active');
    } else {
      headerMobile.classList.remove('header-original');
      headerMobile.classList.remove('header-active');
    }

    setCurrentTop(pageYoffset);
  };

  return (
    <>
      <Container id='content' ref={mainRef}>
        <div className='sheet' id='start'>
          <div>
            <p className='sf'>Hi, my name is</p>
            <h1 className='title'>Maiky Roger.</h1>
            <h1 className='sub-title'>I build things for the web.</h1>
          </div>
          <p className='half-screen'>
            I'm a web developer specializing in building exceptional digital experiences. Currently,
            I'm focused on front-end, building accessible and user experience focused products.
          </p>

          <Button href={'#work'} content={'Check out my projects !'} />
        </div>

        <div className='sheet' id='about'>
          <h2 className='nav-item nav-about'>About Me</h2>
          <div className='abt-div'>
            <div id='text-div-wrapper'>
              <p>
                Hello! My name is Maiky and I enjoy creating things for the internet. My interest in
                web development started back in 2014 when I decided to learn python by myself to
                create some scripts -- turns out that I learned a lot about how to be a self-taught
                and from that day on I knew which career to follow on.
              </p>
              <p>
                I'm looking out for my first job, to be part of some team, and also in meanwhile I
                do freelances, I've some tangible projects where my skills are put to the test.{' '}
                <a className='anchor' href='#work'>
                  See more.
                </a>{' '}
              </p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul className='tech-skills'>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React.js</li>
              </ul>
            </div>
            <div id='img-div-wrapper'>
              <img id='my-img' src='me.jpeg' alt='' />
              <div id='color-div'></div>
              <div id='border-div'></div>
            </div>
          </div>
        </div>

        <div className='sheet' id='work'>
          <h2 className='nav-item nav-work'>Some Things I've Built</h2>
          <p>Coming soon...</p>
        </div>

        <div className='sheet' id='contact'>
          <h2 className='nav-contact'>03. What's Next?</h2>
          <h1>Get In Touch</h1>
          <p>
            I'm currently looking for my first opportunity of job as a front-end developer, which is
            the area I've focusing on recently. However I'm already doing freelances at 99freelas
            and Freelancer.com, so, if you're looking for a freelancer, don't hesitate to contact
            me.{' '}
          </p>

          <Button href={'mailto:maikyrg9@gmail.com'} content={'Say Hello'} />

          <h6> © Built by Maiky Roger</h6>
        </div>
      </Container>

      <div className='email'>
        <a href='mailto:maikyrg9@gmail.com'>maikyrg9@gmail.com</a>
      </div>
      <div className='social-icons'>
        <ul>
          <li>
            <a target={'blank'} href='https://github.com/mkyy'>
              <Git />
            </a>
          </li>
          <li>
            <a target={'blank'} href='https://instagram.com/deoklin'>
              <Insta />
            </a>
          </li>
          <li>
            <a target={'blank'} href='https://linkedin.com/in/maikyroger'>
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
