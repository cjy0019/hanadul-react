import React, { useCallback } from 'react';
import LoginButton from '../atoms/LoginButton';
import LoginTitle from '../atoms/LoginTitle';
import Contents from '../../common/Contents';
import Container from '../../common/Container';
import { useNavigate } from 'react-router-dom';
import { StyledLogo } from '../../common/StyledLogo';

const LoginButtons: React.FC = () => {
  const navigate = useNavigate();

  const navigateToEmailLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);
  return (
    <Container>
      <Contents>
        <StyledLogo />
        <LoginTitle />
        <LoginButton handleClick={navigateToEmailLogin} buttonTheme="email">
          Email Login
        </LoginButton>
        <LoginButton buttonTheme="google">Google Login</LoginButton>
        <LoginButton buttonTheme="kakao">Kakao Login</LoginButton>
        <LoginButton buttonTheme="apple">Apple Login</LoginButton>
      </Contents>
    </Container>
  );
};

export default LoginButtons;
