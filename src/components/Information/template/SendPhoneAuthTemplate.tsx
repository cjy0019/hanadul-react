import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import Container from '../../common/Container';
import Contents from '../../common/Contents';
import SubTitle from '../../common/SubTitle';
import LongButton from '../../login/atoms/LongButton';
import CertificateInput from '../atoms/CertificateInput';

const SendPhoneAuthTemplate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <SubTitle>Information</SubTitle>
        <NationWrapper>
          <SelectWrapper>
            <p>Nation</p>
            <select name="Nation">
              <option value="SouthKorea">South Korea</option>
              <option value="USA">United States</option>
              <option value="England">England</option>
            </select>
          </SelectWrapper>
          <CertificateInput placeHolder="PHONE" />
        </NationWrapper>
        <ButtonWrapper>
          <LongButton buttonTheme="email">SEND CODE</LongButton>
          <LongButton handleClick={() => navigate(-1)} buttonTheme="goBack">
            BACK
          </LongButton>
        </ButtonWrapper>
      </Contents>
    </Container>
  );
};

const NationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  & > select {
    width: 100%;
    border: none;
    background-color: ${palette.black};
    font-size: 1.1rem;
    border-bottom: 1px solid white;
    color: ${palette.white};
    padding: 0.5rem;
  }

  & > p {
    color: white;
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 20px;
`;

export default SendPhoneAuthTemplate;
