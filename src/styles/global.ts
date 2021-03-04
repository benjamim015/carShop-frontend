import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1b1b1f;
    color: #f3f3f3;
    font: 400 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;
