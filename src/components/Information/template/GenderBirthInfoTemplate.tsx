import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import Container from '../../common/Container';
import Contents from '../../common/Contents';
import SubTitle from '../../common/SubTitle';

const GenderBirthInfoTemplate = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const handleChange = (e: SelectChangeEvent<string>) => {
    setGender(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Container>
      <Contents>
        <SubTitle>Information</SubTitle>
        <StyledInput type="text" placeholder="NAME" value={name} onChange={handleName} />
        <FormControl fullWidth>
          <InputLabel style={{ color: '#ffffff', zIndex: 1, backgroundColor: `${palette.black}` }} id="nation-select">
            Gender
          </InputLabel>
          <Select
            style={{
              border: '1px solid #51504f',
              color: '#ffffff',
              outline: 'none',
            }}
            onChange={handleChange}
            value={gender}
            labelId="gender-select"
            id="gender-select"
            label="Gender"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
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

const BirthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  & > p {
    color: ${palette.white};
  }

  & > input {
    color: ${palette.white};
    background-color: transparent;
    border: 1px solid ${palette.lightGray};
    border-radius: 5px;
    height: 40px;
    outline: none;
  }

  & > input:nth-of-type(2) {
    width: 20%;
  }
`;

export default GenderBirthInfoTemplate;
