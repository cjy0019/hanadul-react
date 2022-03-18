import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCustomNavigate } from '../../../hooks/useCustomNavigate';
import Container from '../../common/Container';
import Contents from '../../common/Contents';
import SubTitle from '../../common/SubTitle';
import LongButton from '../../login/atoms/LongButton';
import CertificateInput from '../atoms/CertificateInput';

const SendPhoneAuthTemplate: React.FC = () => {
  const { goBack } = useCustomNavigate();
  const [nation, setNation] = useState<string>('');

  const handleChange = (e: SelectChangeEvent<string>) => {
    setNation(e.target.value);
  };

  return (
    <Container>
      <Contents>
        <SubTitle>Information</SubTitle>
        <NationWrapper>
          <SelectWrapper>
            <FormControl fullWidth>
              <InputLabel style={{ color: '#ffffff' }} id="nation-select">
                Nation
              </InputLabel>
              <Select
                style={{
                  borderBottom: '1px solid white',
                  color: '#ffffff',
                  outline: 'none',
                }}
                onChange={handleChange}
                value={nation}
                labelId="nation-select"
                id="nation-select"
                label="Nation"
              >
                <MenuItem value="South Korea">South Korea</MenuItem>
                <MenuItem value="North Korea">North Korea</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
              </Select>
            </FormControl>
          </SelectWrapper>
          <CertificateInput placeHolder="PHONE" />
        </NationWrapper>
        <ButtonWrapper>
          <LongButton buttonTheme="email">SEND CODE</LongButton>
          <LongButton handleClick={() => goBack} buttonTheme="goBack">
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
