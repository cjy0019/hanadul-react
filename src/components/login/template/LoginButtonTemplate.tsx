import React, { useCallback } from 'react';
import LoginTitle from '../atoms/LoginTitle';
import Contents from '../../common/Contents';
import Container from '../../common/Container';
import { useNavigate } from 'react-router-dom';
import { StyledLogo } from '../../common/StyledLogo';
import LongButton from '../atoms/LongButton';

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
        <LongButton handleClick={navigateToEmailLogin} buttonTheme="email">
          Email Login
        </LongButton>
        <LongButton buttonTheme="google">Google Login</LongButton>
        <LongButton buttonTheme="kakao">Kakao Login</LongButton>
        <LongButton buttonTheme="apple">Apple Login</LongButton>
      </Contents>
    </Container>
  );
};

export default LoginButtons;
