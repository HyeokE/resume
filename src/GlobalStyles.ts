import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import "../node_modules/normalize.css/normalize.css";

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 16px;
    word-break: keep-all;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, Bazier Square,
    Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
    letter-spacing: -0.3px;
    color: #222222;
    padding-bottom: 2rem;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media screen and (max-width: 960px) {
      
        font-size: 14px;
      
    }
    &:before {
      position: fixed;
      z-index: 1;
      top: 0;
      display: block;
      content: "";
      width: 100%;
      height: 10px;
      background: #00d2ff;
      background: linear-gradient(to right, #3a7bd5, #00d2ff);
    }
  }

  
  ::selection {
    background: #00d2ff;
  }`;
