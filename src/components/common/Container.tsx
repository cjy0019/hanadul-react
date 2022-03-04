import React, { ReactNode } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Container: React.FC<ReactNode> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  background-color: ${palette.black};
`;

export default Container;
