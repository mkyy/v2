import styled from 'styled-components';

export const Container = styled.main`
  width: 75vw;
  margin-inline: auto;

  #start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 1s ease;
    min-height: 100vh;
    width: 1000px;
    margin-inline: auto;

    @media (max-width: 425px) {
      align-items: center;
      width: 100%;
    }
  }

  #start .half-screen {
    width: 50%;
    line-height: 1.4;
    margin-bottom: 40px;

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

    @media (min-width: 1800px) {
      font-size: 2.5vw;
    }
  }

  #start .sub-title {
    font-size: 4vw;
    line-height: 0.4;

    @media (max-width: 1024px) {
      font-size: 6vw;
    }

    @media (min-width: 1800px) {
      font-size: 2vw;
    }
  }

  #start .sf {
    font-family: 'Fira Code', monospace;
    color: var(--light);
  }

  .fade-in-initial {
    opacity: 0;
  }

  @keyframes elementsfade {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
    padding-top: 100px;

    &::before {
      content: '01.';
    }

    @media (max-width: 425px) {
      font-size: 20px;
      text-align: center;
      padding-top: 0;
    }
  }

  .nav-work {
    padding-top: 50px;
    margin-bottom: 100px;
    width: 1000px;
    margin-inline: auto;
    &::before {
      content: '02.';
    }

    &::after {
      left: 370px;
      width: 250px;
    }

    @media (max-width: 425px) {
      padding-top: 0;
      width: 100%;
      margin-bottom: 40px;
      font-size: 20px;
      text-align: center;
      margin-top: 100px;
    }
  }

  .nav-contact {
    color: var(--light);
    font-family: 'Fira Code', monospace;
    font-size: 20px;
    font-weight: 300;
  }

  #about {
    padding-left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1440px;
    margin-inline: auto;
    margin-bottom: 100px;

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

  #work {
    position: relative;
  }

  #contact {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120vh;
    max-height: 750px;
    max-width: 1000px;
    margin: 0 auto;

    h1 {
      color: var(--principal-text);
      font-size: 50px;
      margin-top: 0;

      @media (max-width: 425px) {
        margin-bottom: 5px;
      }
    }

    p {
      width: 80%;
      line-height: 30px;
      text-align: center;
      margin-bottom: 50px;
      margin-top: 0;

      @media (max-width: 425px) {
        line-height: 20px;
        margin-bottom: 20px;
      }
    }

    h6 {
      position: absolute;
      bottom: 0;
      font-weight: 500;
      font-family: 'Fira Code', monospace;
      font-size: 14px;
    }

    .contact-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
    }

    @media (max-width: 425px) {
      height: 200vh;
      max-height: 750px;
      h1 {
        font-size: 40px;
        text-align: center;
      }

      p {
        width: 100%;
        text-align: justify;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;

export const JobSampleComponent = styled.div`
  width: 1000px;
  height: 370px;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-bottom: 100px;

  .image-container {
    width: 60%;
    height: 300px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      position: absolute;
      filter: grayscale(100%);
      z-index: -1;
      transition: 0.3s ease;
    }

    .bg-div {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #020c1b;
      opacity: 0.7;
      position: absolute;
      z-index: 0;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
      .bg-div {
        opacity: 0;
      }
      cursor: pointer;
    }
  }

  .description-container {
    max-width: 50%;
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;

    .featured-project {
      font-weight: 500;
      font-family: 'Fira Code', monospace;
      font-size: 14px;
      color: var(--light);
      margin: 5px;
    }

    .project-title {
      margin: 0;

      a {
        color: var(--principal-text);
        font-size: 24px;
        text-decoration: none;
        transition: 0.3s ease;

        &:hover {
          color: var(--light);
        }
      }
    }
    .project-desc {
      background-color: #112240;
      border-radius: 4px;
      padding: 25px;
      z-index: 2;
    }
    .techs-used {
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      padding: 0;

      li {
        margin-left: 15px;
        font-family: 'Fira Code', monospace;
        font-size: 13px;
      }
    }

    .buttons {
      display: flex;
      justify-content: flex-end;

      svg {
        margin-left: 20px;
      }
    }
  }
  @media (min-width: 426px) {
    :nth-child(2n + 1) {
      flex-direction: row-reverse;

      .description-container {
        left: 0;
        text-align: left;

        .techs-used {
          justify-content: flex-start;
          padding: 0;
          li {
            margin-left: 0;
            margin-right: 15px;
          }
        }

        .buttons {
          justify-content: flex-start;
          margin-left: 0;

          svg {
            margin-left: 0;
            margin-right: 15px;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 450px;
    margin-bottom: 20px;

    .image-container {
      display: none;
    }

    .description-container {
      text-align: center;
      position: initial;
      max-width: 100%;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
      background-color: #112240;
      border-radius: 2px;
      padding: 30px 10px;

      .project-desc {
        padding: 25px 10px;
        text-align: justify;
      }

      .techs-used {
        justify-content: flex-start;
        flex-wrap: wrap;
        line-height: 25px;
        color: #ccd6f6;
      }

      .buttons {
        justify-content: flex-start;
        position: absolute;
        bottom: 25px;
      }
    }
  }
`;

export const OtherProjects = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 100px;

  h2 {
    text-align: center;
    color: var(--principal-text);
    margin-bottom: 50px;

    &::after {
      content: '';
      width: 250px;
      height: 1px;
      background: var(--light);
      position: absolute;
      bottom: -15px;
      left: 38%;
    }
    @media (max-width: 425px) {
      &::after {
        width: 150px;
        left: 27%;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .item {
    width: 320px;
    height: 320px;
    background-color: #112240;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 0.5s ease-out;

    &:hover {
      transform: translateY(-10px);

      h3 {
        color: var(--light);
      }
    }
  }

  .icons-container {
    display: flex;
    justify-content: space-between;

    .folder {
      width: 50px;
      color: var(--light);
    }
  }

  .text-container {
    h3 {
      color: var(--principal-text);
      transition: 0.5s ease-out;
    }

    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
      padding: 0;

      li {
        margin-right: 10px;
        font-family: 'Fira Code', monospace;
        font-size: 13px;
      }
    }
  }

  .btn {
    width: fit-content;
    margin-inline: auto;
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    h2 {
      margin-top: 50px;
      font-size: 20px;
    }
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .item {
      margin-bottom: 20px;
    }
  }
`;
