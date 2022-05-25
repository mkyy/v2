import styled from 'styled-components';

export const Container = styled.main`
  width: 75vw;
  margin-inline: auto;

  #start {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 425px) {
      align-items: center;
    }
  }

  #start .half-screen {
    width: 50%;
    line-height: 1.4;
    margin-bottom: 8vh;

    @media (max-width: 728px) {
      width: 90%;
    }
  }

  #start .title {
    color: #ccd6f6;
    font-size: 6vw;
    line-height: 0.4;

    @media (max-width: 1024px) {
      font-size: 8vw;
    }
  }

  #start .sub-title {
    font-size: 4vw;
    line-height: 0.4;

    @media (max-width: 1024px) {
      font-size: 6vw;
    }
  }

  #start .sf {
    font-family: 'Fira Code', monospace;
    color: var(--light);
    margin-top: 10vh;
  }

  .nav-item {
    color: var(--principal-text);

    &::before {
      color: var(--light);
      font-family: 'Fira Code', monospace;
      font-weight: 500;
      font-size: 0.8em;
    }

    &::after {
      content: '';
      height: 1px;
      width: 50%;
      display: block;
      position: relative;
      top: -15px;
      left: 180px;
      background-color: #233554;
    }

    @media (max-width: 425px) {
      &::after {
        display: none;
      }
    }
  }

  .nav-about {
    &::before {
      content: '01.';
    }
  }

  .nav-work {
    &::before {
      content: '02.';
    }

    &::after {
      left: 350px;
    }
  }

  .nav-contact {
    &::before {
      content: '03.';
    }
    &::after {
      left: 150px;
    }
  }

  #about {
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .abt-div {
      display: flex;

      @media (max-width: 728px) {
        flex-direction: column;
      }

      .anchor {
        text-decoration: none;
        color: var(--light);
        position: relative;

        &:hover {
          border-bottom: 1px solid var(--light);
        }
      }

      #text-div-wrapper {
        width: 50%;

        .tech-skills {
          list-style-type: none;

          li {
            margin-bottom: 10px;
            &::before {
              content: '▹';
              margin-right: 10px;
              font-size: 10px;
              color: var(--light);
            }
          }
        }
        @media (max-width: 728px) {
          width: 100%;
        }
      }

      p {
        line-height: 1.7;
      }

      #img-div-wrapper {
        margin-left: 5%;
        position: relative;

        #color-div {
          width: 300px;
          height: 300px;
          background-color: #67f8dc;
          position: absolute;
          border-radius: 5px;
          opacity: 0.4;
          transition: ease-in-out 0.4s;
        }

        #border-div {
          width: 300px;
          height: 300px;
          position: absolute;
          border-radius: 5px;
          border: 2px solid #67f8dc;
          transform: translateX(8%) translateY(8%);
          z-index: -1;
          transition: ease-in-out 0.4s;
        }

        #my-img {
          width: 300px;
          height: 300px;
          border-radius: 5px;
          position: absolute;
          filter: grayscale(30%);
        }

        &:hover {
          #color-div {
            opacity: 0;
          }

          #border-div {
            transform: translateX(5%) translateY(5%);
          }

          #my-img {
            filter: grayscale(0);
          }
        }

        @media (max-width: 728px) {
          margin-left: 0;
          margin-bottom: 300px;
          margin-top: 20px;
          display: flex;
          justify-content: center;

          #color-div {
            width: 250px;
            height: 250px;
          }
          #border-div {
            width: 250px;
            height: 250px;
          }
          #my-img {
            width: 250px;
            height: 250px;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;
