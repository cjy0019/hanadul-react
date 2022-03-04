import { createGlobalStyle } from 'styled-components';
import playballRegular from '../assets/fonts/Playball-Regular.woff';
import pacifico from '../assets/fonts/Pacifico-Regular.woff';

export default createGlobalStyle`
  @font-face {
    font-family: playball;
    src: local("playball"),url(${playballRegular}) format('woff');
    font-weight: normal;
  }

@font-face {
    font-family: pacifico;
    src: local('pacifico'),url(${pacifico}) format('woff')
  }
`;
