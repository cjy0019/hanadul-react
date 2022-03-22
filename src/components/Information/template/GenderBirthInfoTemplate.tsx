import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import Container from '../../common/Container';
import Contents from '../../common/Contents';
import SubTitle from '../../common/SubTitle';

type Birth = {
  year: string;
  month: string;
  day: string;
};

const GenderBirthInfoTemplate = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [birth, setBirth] = useState<Birth>({
    year: '',
    month: '',
    day: '',
  });

  const restrictLength = (maxLength: number, birthType: string, object: React.ChangeEvent<HTMLInputElement>) => {
    if (object.target.value.length > maxLength) return;
    else {
      setBirth({ ...birth, [`${birthType}`]: object.target.value });
    }
  };

  const handleChange = (e: SelectChangeEvent<string>) => {
    setGender(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    restrictLength(4, 'year', e);
  };

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    restrictLength(2, 'month', e);
  };

  const handleDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    restrictLength(2, 'day', e);
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

        <BirthContainer>
          <p>Birth</p>
          <input type="number" value={birth.year} onChange={handleYear} />
          <p>/</p>
          <input type="number" value={birth.month} onChange={handleMonth} />
          <p>/</p>
          <input type="number" value={birth.day} onChange={handleDay} />
        </BirthContainer>
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
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 18px;
  }

  & > input:nth-of-type(1) {
    width: 30%;
  }

  & > input:nth-of-type(2) {
    width: 20%;
  }

  & > input:nth-of-type(3) {
    width: 20%;
  }
`;

export default GenderBirthInfoTemplate;
