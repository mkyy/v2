import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button } from '../Button/';
import ContactForm from '../ContactForm';
import { Container, JobSampleComponent, OtherProjects } from './style';
import Git from '../../../public/icons/git.svg?component';
import Insta from '../../../public/icons/insta.svg?component';
import Linkedin from '../../../public/icons/linkedin.svg?component';
import External from '../../../public/icons/external.svg?component';
import Folder from '../../../public/icons/folder.svg?component';

export const Main = () => {
  const mainRef = useRef();
  const [currentTop, setCurrentTop] = useState(93);

  useEffect(() => handleScrollFadeIn(), []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollMenu();
      handleScrollFadeIn();
    });
  }, [currentTop]);

  const handleScrollMenu = () => {
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

  const handleScrollFadeIn = () => {
    const ElementsToFade = document.getElementsByClassName('fade-in');
    const InitialElements = document.getElementsByClassName('fade-in-initial');

    Array.from(InitialElements).forEach((element, index) => {
      element.style.animation = `elementsfade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });

    Array.from(ElementsToFade).forEach(element => {
      if (!element.classList.contains('fade-in-active')) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
          element.classList.add('fade-in-active');
        }
      }
    });
  };

  return (
    <>
      <Container id='content' ref={mainRef}>
        <div id='start'>
          <div>
            <p className='sf fade-in-initial'>Hi, my name is</p>
            <h1 className='title fade-in-initial'>Maiky Roger.</h1>
            <h1 className='sub-title fade-in-initial'>I build things for the web.</h1>
          </div>
          <p className='half-screen fade-in-initial'>
            I'm a web developer specializing in building exceptional digital experiences. Currently,
            I'm focused on front-end, building accessible and user experience focused products. You
            may be interested in{' '}
            <a href='#contact' className='anchor'>
              hiring me.
            </a>
          </p>
          <div className='fade-in-initial'>
            <Button href={'#work'} content={'Check out my projects !'} c />
          </div>
        </div>

        <div className='fade-in' id='about'>
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
              <div className='lists'>
                <ul className='tech-skills'>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>React</li>
                </ul>
                <ul className='tech-skills'>
                  <li>Next.js</li>
                  <li>Gatsby</li>
                  <li>Firebase</li>
                </ul>
              </div>
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
          <JobSampleComponent className='fade-in'>
            <div className='image-container'>
              <a href='https://renee-trajar.vercel.app/' target={'blank'}>
                <img src='renee.png' alt='' />
                <div className='bg-div'></div>
              </a>
            </div>
            <div className='description-container'>
              <p className='featured-project'>Featured Project</p>
              <h1 className='project-title'>
                <a href='https://renee-trajar.vercel.app/' target={'blank'}>
                  {' '}
                  Renee Trajar
                </a>
              </h1>
              <p className='project-desc'>
                A website intended for a Tailor company, tells a little about Renee's history,
                explains about the service of the same, and shows offers for a limited time, in
                addition to testimonials about customers who have been buying Renee's services for
                over 10 years.
              </p>
              <ul className='techs-used'>
                <li>React</li>
                <li>Styled Components</li>
                <li>Vercel</li>
              </ul>
              <div className='buttons'>
                <a href='https://github.com/mkyy/renee-trajar' target={'blank'}>
                  <Git />
                </a>
                <a href='https://renee-trajar.vercel.app/' target={'blank'}>
                  <External />
                </a>
              </div>
            </div>
          </JobSampleComponent>

          <JobSampleComponent className='fade-in'>
            <div className='image-container'>
              <a href='https://freegames-db.vercel.app/' target={'blank'}>
                <img src='freegdb.png' alt='' />
                <div className='bg-div'></div>
              </a>
            </div>
            <div className='description-container'>
              <p className='featured-project'>Featured Project</p>
              <h1 className='project-title'>
                <a href='https://freegames-db.vercel.app/' target={'blank'}>
                  {' '}
                  FreeGames DB
                </a>
              </h1>
              <p className='project-desc'>
                Games platform that shows information about the most popular free games on nowadays,
                with 350+ different games. It has a filter tool by date of launch and platform.
              </p>
              <ul className='techs-used'>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Styled Components</li>
                <li>Vercel</li>
              </ul>
              <div className='buttons'>
                <a href='https://github.com/mkyy/freegames-db' target={'blank'}>
                  <Git />
                </a>
                <a href='https://freegames-db.vercel.app/' target={'blank'}>
                  <External />
                </a>
              </div>
            </div>
          </JobSampleComponent>

          <JobSampleComponent className='fade-in'>
            <div className='image-container'>
              <a href='https://mkyy.github.io/netflix-clone/' target={'blank'}>
                <img src='netflix.png' alt='' />
                <div className='bg-div'></div>
              </a>
            </div>
            <div className='description-container'>
              <p className='featured-project'>Featured Project</p>
              <h1 className='project-title'>
                <a href='https://mkyy.github.io/netflix-clone/' target={'blank'}>
                  Netflix Clone
                </a>
              </h1>
              <p className='project-desc'>
                A replica of the Netflix plataform, using the TMDB API to show the most recent
                movies and series.
              </p>
              <ul className='techs-used'>
                <li>React</li>
                <li>jQuery</li>
                <li>Styled Components</li>
                <li>TMDB API</li>
                <li>Vercel</li>
              </ul>
              <div className='buttons'>
                <a href='https://github.com/mkyy/netflix-clone' target={'blank'}>
                  <Git />
                </a>
                <a href='https://mkyy.github.io/netflix-clone/' target={'blank'}>
                  <External />
                </a>
              </div>
            </div>
          </JobSampleComponent>
        </div>

        <OtherProjects>
          <h2 className='fade-in'>Other Noteworthy Projects</h2>

          <div className='container fade-in'>
            <a href='' style={{ textDecoration: 'none', color: 'var(--text)' }}>
              <div className='item'>
                <div className='icons-container'>
                  <Folder />
                  <External />
                </div>
                <div className='text-container'>
                  <h3>Mimos da Patty</h3>
                  <p>
                    A website for a online stationery, who sells a lot of stuff, including
                    personalized cakes and stylish gifts for any kind of party.
                  </p>
                  <ul>
                    <li>React</li>
                    <li>Fullpage.js</li>
                  </ul>
                </div>
              </div>
            </a>

            <a href='' style={{ textDecoration: 'none', color: 'var(--text)' }}>
              <div className='item'>
                <div className='icons-container'>
                  <Folder />
                  <External />
                </div>
                <div className='text-container'>
                  <h3>Delivery System</h3>
                  <p>
                    This is a system for an company that outsource motoboy services to companys that
                    wants to delivery some product.
                  </p>
                  <ul>
                    <li>React</li>
                    <li>Context API</li>
                  </ul>
                </div>
              </div>
            </a>

            <a href='' style={{ textDecoration: 'none', color: 'var(--text)' }}>
              <div className='item'>
                <div className='icons-container'>
                  <Folder />
                  <External />
                </div>
                <div className='text-container'>
                  <h3>Pure ASCII Draw</h3>
                  <p>
                    Drawing a hourglass using vanilla javascript using only ASCII characters. And
                    you can also choose the size of the hourglass where n = matrix.
                  </p>
                  <ul>
                    <li>JavaScript</li>
                    <li>ASCII</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className='btn'>
            <Button href={'https://github.com/mkyy'} content={'See more'} />
          </div>
        </OtherProjects>

        <div id='contact'>
          <h2 className='nav-contact fade-in'>03. What's Next?</h2>
          <h1 className='fade-in'>Get In Touch</h1>
          <p className='fade-in'>
            I'm currently looking for my first opportunity of job as a front-end developer, which is
            the area I've focusing on recently. However I'm already doing freelances at{' '}
            <a href='https://www.99freelas.com.br/user/maikyroger' className='anchor'>
              99freelas
            </a>
            , so, if you're looking for a freelancer, don't hesitate to contact me.{' '}
          </p>
          <div className='contact-wrapper fade-in'>
            <ContactForm />
          </div>

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
