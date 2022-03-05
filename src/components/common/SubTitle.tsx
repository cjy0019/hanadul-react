import React, { ReactNode } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const SubTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  color: ${palette.white};
  font-size: 2.5rem;
`;

export default SubTitle;
