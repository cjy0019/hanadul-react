import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import Container from '../../common/Container';
import Contents from '../../common/Contents';
import { StyledLogo } from '../../common/StyledLogo';
import LongButton from '../atoms/LongButton';
import LoginTitle from '../atoms/LoginTitle';

const EmailLoginTemplate: React.FC = () => {
  return (
    <Container>
      <Contents>
        <StyledLogo />
        <LoginTitle />
        <StyledInput type="text" placeholder="EMAIL" />
        <StyledInput type="password" placeholder="PASSWORD" />
        <CheckboxWrapper>
          <input type="checkbox" id="auto-login" />
          <label htmlFor="auto-login">Auto Login</label>
        </CheckboxWrapper>
        <LongButton buttonTheme="email">Login</LongButton>
        <LinkContainer>
          <LinkWrapper>
            <Link to="/register">Don't have a Hanadul account yet?</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/">Forgot your Email or Password</Link>
          </LinkWrapper>
        </LinkContainer>
      </Contents>
    </Container>
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  color: ${palette.white};
  background-color: transparent;
  border: 1px solid ${palette.lightGray};
  border-radius: 5px;
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input[type='checkbox'] {
    zoom: 1.5;
  }

  & > label {
    font-size: 1.1rem;
    color: ${palette.darkWhite};
    cursor: pointer;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.3rem;
  gap: 1.2rem;
`;

const LinkWrapper = styled.div`
  width: 100%;

  & > a {
    color: ${palette.white};
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

export default EmailLoginTemplate;
