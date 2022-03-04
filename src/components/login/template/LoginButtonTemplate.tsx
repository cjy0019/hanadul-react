import React, { useCallback } from 'react';
import styled from 'styled-components';
import LoginButton from '../atoms/LoginButton';
import LoginTitle from '../atoms/LoginTitle';
import { ReactComponent as Logo } from '../../../assets/icon/hanadul-logo.svg';
import Contents from '../../common/Contents';
import Container from '../../common/Container';
import { useNavigate } from 'react-router-dom';

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

const StyledLogo = styled(Logo)`
  position: absolute;
  top: -60px;
  left: 20px;
  width: 50px;
`;

export default LoginButtons;
