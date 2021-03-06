import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;

  background-color: rgba(10, 25, 47, 0.8);
  z-index: 5;

  .logo {
    .poly:hover {
      cursor: pointer;
    }

    .text {
      user-select: none;

      &:hover {
        cursor: pointer;
      }
    }
  }

  nav ol {
    display: flex;
    align-items: center;
    list-style-type: none;

    li {
      margin-right: 50px;
      font-family: 'Fira Code', monospace;
      font-size: 0.8em;
      transform: translateY(100%);
      opacity: 0;
      transition: 1s ease;

      &:nth-child(1) {
        ::before {
          content: '01.';
          color: var(--light);
          margin-right: 5px;
        }
      }
      &:nth-child(2) {
        ::before {
          content: '02.';
          color: var(--light);
          margin-right: 5px;
        }
      }
      &:nth-child(3) {
        ::before {
          content: '03.';
          color: var(--light);
          margin-right: 5px;
        }
      }

      a {
        text-decoration: none;
        color: var(--principal-text);
        transition: ease 0.3s;

        &:hover {
          color: var(--light);
        }
      }
    }

    li.started {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 728px) {
    display: none;
  }
`;

export const Wrapper = styled.header`
  width: 100vw;
  height: 70px;
  transition: ease 0.5s;
  transform: translateY(-100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const MobileMenu = styled.header`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 70px;
  transition: ease 0.5s;
  transform: translateY(-100%);
  z-index: 5;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
    background: rgba(10, 25, 47, 0.7);
    height: 70px;
    margin: 0 auto;
    width: 90%;
  }

  .nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    width: 80vw;
    height: 100vh;
    background: #112240;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }

  .nav-list li {
    letter-spacing: 3px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--principal-text);

      &:hover {
        color: var(--light);
      }
    }

    &:nth-child(1) {
      ::before {
        content: '01.';
        color: var(--light);
      }
    }
    &:nth-child(2) {
      ::before {
        content: '02.';
        color: var(--light);
      }
    }
    &:nth-child(3) {
      ::before {
        content: '03.';
        color: var(--light);
      }
    }
  }

  .mobile-menu {
    cursor: pointer;
    z-index: 2;
  }

  .mobile-menu div {
    width: 32px;
    height: 2px;
    background: var(--light);
    margin: 8px;
    transition: 0.3s;
  }

  .nav-list.active {
    transform: translateX(0);
  }

  .mobile-menu.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  .mobile-menu.active .line2 {
    opacity: 0;
  }

  .mobile-menu.active .line3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 728px) {
    display: inherit;
  }
`;
