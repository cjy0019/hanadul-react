import React, { FC } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';

const CertificateInput: FC<{ placeHolder: string }> = ({ placeHolder }) => {
  return <StyledInput type="number" placeholder={placeHolder} />;
};

const StyledInput = styled.input`
  font-size: 1.1rem;
  background-color: ${palette.black};
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.white};
  padding: 1rem 0;
  border-radius: 4px;
  color: ${palette.white};
`;

export default CertificateInput;
