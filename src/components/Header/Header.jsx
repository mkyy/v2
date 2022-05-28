import { Container, MobileMenu } from './style';
import { SMButton } from '../SMButton/';
import { useEffect, useRef } from 'react';

export const Header = () => {
  const mobileMenuRef = useRef();
  const mobileNavList = useRef();

  useEffect(() => {
    mobileMenuRef.current.addEventListener('click', () => handleClick());
  }, [mobileMenuRef]);

  const handleClick = () => {
    const navLinks = document.querySelectorAll('.nav-list li');
    const main = document.getElementById('content');

    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
    mobileMenuRef.current.classList.toggle('active');
    mobileNavList.current.classList.toggle('active');
    main.classList.toggle('blur');
  };

  const handleItemClick = () => {
    const main = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-list li');

    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });

    mobileMenuRef.current.classList.remove('active');
    mobileNavList.current.classList.remove('active');
    main.classList.remove('blur');
  };

  return (
    <>
      <Container className='header-original' id='header'>
        <svg className='logo' width='50' height='50' viewBox='0 0 35 35'>
          <polygon
            className='poly'
            fill='#0A192F'
            stroke='#64FFDA'
            strokeWidth='1'
            points='16,1 32,32 1,32'
          />
          <text className='text' fontSize={10} x={12} y={26} fill='#64FFDA'>
            M
          </text>
        </svg>
        <nav>
          <ol>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ol>
        </nav>
        <SMButton href={'cv-maiky.pdf'} content={'Resume'} />
      </Container>

      <MobileMenu className='header-original' id='header-mobile'>
        <nav>
          <svg className='logo' width='50' height='50' viewBox='0 0 35 35'>
            <polygon
              className='poly'
              fill='#0A192F'
              stroke='#64FFDA'
              strokeWidth='1'
              points='16,1 32,32 1,32'
            />
            <text className='text' fontSize={10} x={12} y={26} fill='#64FFDA'>
              M
            </text>
          </svg>
          <div ref={mobileMenuRef} className='mobile-menu'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
          <ul ref={mobileNavList} className='nav-list'>
            <li>
              <a onClick={handleItemClick} href='#about'>
                About
              </a>
            </li>
            <li>
              <a onClick={handleItemClick} href='#work'>
                Work
              </a>
            </li>
            <li>
              <a onClick={handleItemClick} href='#contact'>
                Contact
              </a>
            </li>
            <li>
              <SMButton href={'cv-maiky.pdf'} content={'Resume'} />
            </li>
          </ul>
        </nav>
      </MobileMenu>
    </>
  );
};
