import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import LoginButton from '../atoms/LoginButton';
import LoginTitle from '../atoms/LoginTitle';

const LoginButtons: React.FC = () => {
  return (
    <Container>
      <LoginTitle />
      <LoginButton buttonTheme="email">Email Login</LoginButton>
      <LoginButton buttonTheme="google">Google Login</LoginButton>
      <LoginButton buttonTheme="kakao">Kakao Login</LoginButton>
      <LoginButton buttonTheme="apple">Apple Login</LoginButton>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${palette.black};
  height: 350px;
`;

export default LoginButtons;
