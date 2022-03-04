import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Contents: React.FC<ReactNode> = ({ children }) => {
  return <StyledContents>{children}</StyledContents>;
};

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 2rem;
  gap: 1rem;

  & > h1 {
    margin-bottom: 2.5rem;
  }
`;

export default Contents;
