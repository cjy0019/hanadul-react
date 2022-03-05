import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import Container from '../../common/Container';
import SubTitle from '../../common/SubTitle';
import LongButton from '../../login/atoms/LongButton';

type Email = {
  emailId: string;
  isValidate?: boolean;
};
const EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const RegisterTemplate: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<Email>({ emailId: '', isValidate: false });
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  function validateEmail(emails: any) {
    return test(emails);
  }

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleEmail = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(
    (e) => {
      setEmail({ ...email, emailId: e.target.value });
    },
    [email]
  );

  const handlePassword = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setPassword(e.target.value);
  }, []);

  const handlePasswordConfirm = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setPasswordConfirm(e.target.value);
  }, []);

  return (
    <Container>
      <Contents>
        <SubTitle>Register</SubTitle>
        <StyledInput type="text" placeholder="EMAIL" value={email.emailId} onChange={handleEmail} />
        <div>Please Enter valid email address.</div>
        <StyledInput type="password" placeholder="PASSWORD" value={password} onChange={handlePassword} />
        <div>dd</div>
        <PaswordConfirmWrapper>
          <StyledInput
            type="password"
            placeholder="PASSWORD CONFIRM"
            value={passwordConfirm}
            onChange={handlePasswordConfirm}
          />
          <StyledP>PASSWORD CONFIRM</StyledP>
          <div>dd</div>
        </PaswordConfirmWrapper>

        <ButtonWrapper>
          <LongButton buttonTheme="email">CREATE ACCOUNT</LongButton>
          <LongButton handleClick={goBack} buttonTheme="goBack">
            BACK
          </LongButton>
        </ButtonWrapper>
      </Contents>
    </Container>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 2rem;

  & > h1 {
    margin-bottom: 2.5rem;
  }
`;

const ValidateText = styled.p`
  color: ${palette.warningRed};
`;

const PaswordConfirmWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  color: ${palette.white};
  background-color: transparent;
  border: 1px solid ${palette.lightGray};
  border-radius: 5px;
`;

const StyledP = styled.p`
  position: absolute;
  background-color: #000;
  top: -5px;
  left: 15px;
  color: gray;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export default RegisterTemplate;
