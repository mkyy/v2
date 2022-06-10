import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('http://fonts.cdnfonts.com/css/calibre');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');


    *{
        box-sizing: border-box;
    }

    :root{
        --bg: #0A192F;
        --text:#6C7794;
        --principal-text: #ccd6f6;
        --light: #64FFDA;
        --hover: #133040;
    }

    ::selection{
        background-color: #233554;
        color: var(--principal-text);
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        background-color: var(--bg);
        color:var(--text);
        font-family: 'Calibre', sans-serif;
    }

    .loading{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sheet{
        min-height: 100vh;
        max-width: 1440px;
        margin: 0 auto;

        @media (min-width:1800px) {
            min-height: 80vh;
        }
    }

    .header-active{
        transform: translateY(0%);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .header-original{
        transform: translateY(0%);
        box-shadow: none;
    }

    .email {
    
    position: fixed;
    right: 0px;
    bottom: 150px;
    transform: rotate(90deg);
    transition: 0.1s;

    a {
        color: var(--principal-text);
        font-family: 'Fira Code', monospace;
        font-size: .8rem;
        text-decoration: none;
    }

    &:hover{
        cursor: pointer;
        transform: rotate(90deg) translateX(-5%);

        a {
        color: var(--light);

        }
    }

    &::after{
      content: '';
      height: 1px;
      width: 50%;
      display: block;
      position: relative;
      top: -10px;
      left: 165px;
      background-color: var(--principal-text);
    }

    @media (max-width:1024px) {
        display:none;
    }
  }

  .social-icons{
      position: fixed;
      left: 0;
      bottom: -150px;
      display: flex;
      justify-content: column;
      ul {
        list-style: none;

        &::after{
            content: '';
            height: 200px;
            width: 1px;
            display: block;
            position: relative;
            top: 0px;
            left: 10px;
            background-color: var(--principal-text);
        }
      }
      ul li {
          margin-bottom: 20px;
      }
      ul li img{
          width: 24px;
      }

      @media (max-width:1024px) {
        display:none;
    }
  }

  .svg{
        width: 24px;
        stroke: var(--text);
        transition: ease 0.4s;
        stroke: var(--principal-text);

        &:hover{
            stroke: var(--light);
            cursor: pointer;
            transform: translateY(-10%);
        }
      }

    .blur{
        filter: blur(10px);
    }

    .fade-in{
        opacity: 0;
        transform: translateY(20%);
        transition: all .7s ease-out;
    }
    
    .fade-in-active{
        opacity: 1;
        transform: translateY(0);
    }

    .div-sucess{
        background: #112240;
        border-radius: 10px;
        padding: 25px;
        margin: auto;
        margin-top: 100px;
    }

`;
