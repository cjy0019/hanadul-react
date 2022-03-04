import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';

const LoginTitle: React.FC = () => {
  return <Title>Hanadul</Title>;
};

const Title = styled.h1`
  font-size: 2.4rem;
  font-family: 'pacifico';
  color: ${palette.white};
`;

export default LoginTitle;
