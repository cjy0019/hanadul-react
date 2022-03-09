import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useRegister } from '../../../hooks/useRegister';
import palette from '../../../styles/palette';
import Container from '../../common/Container';
import SubTitle from '../../common/SubTitle';
import LongButton from '../../login/atoms/LongButton';

interface StyledValidate {
  isEmailValidate?: boolean;
  isPasswordValidate?: boolean;
  isPasswordConfirmValidate?: boolean;
  emptyLines?: boolean;
}

const RegisterTemplate: FC = () => {
  const { goBack, handleEmail, handlePassword, email, password, passwordConfirm, handlePasswordConfirm } =
    useRegister();

  return (
    <Container>
      <Contents>
        <SubTitle>Register</SubTitle>
        <StyledInput
          type="text"
          placeholder="EMAIL"
          value={email.emailId}
          onChange={handleEmail}
          isEmailValidate={!email.isValidate}
        />
        {!email.isValidate && <ValidateText>Please Enter valid email address.</ValidateText>}
        {email.isValidate && <EmptySpace />}
        <StyledInput
          type="password"
          placeholder="PASSWORD"
          value={password.userPassword}
          onChange={handlePassword}
          isPasswordValidate={!password.isValidate}
        />
        {!password.isValidate && (
          <ValidateText>Passwords must be 8 ~ 16 characters and contain uppercase letters and symbols.</ValidateText>
        )}
        {password.isValidate && <EmptySpace emptyLines />}
        <PaswordConfirmWrapper>
          <StyledInput
            type="password"
            placeholder="PASSWORD CONFIRM"
            value={passwordConfirm.userPasswordConfirm}
            onChange={handlePasswordConfirm}
            isPasswordConfirmValidate={passwordConfirm.isValidate}
          />
          <StyledP>PASSWORD CONFIRM</StyledP>
          {passwordConfirm.isValidate && <ValidateText>Please enter same password.</ValidateText>}
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
  width: 100%;
  color: ${palette.warningRed};
  padding-left: 1.2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

const EmptySpace = styled.div<StyledValidate>`
  height: 40px;

  ${(props) =>
    props.emptyLines &&
    css`
      height: 60px;
    `}
`;

const PaswordConfirmWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<StyledValidate>`
  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  color: ${palette.white};
  background-color: transparent;
  border: 1px solid ${palette.lightGray};
  border-radius: 5px;
  outline: 1px solid ${palette.lightGray};

  ${(props) =>
    props.isEmailValidate &&
    css`
      border: 1px solid ${palette.warningRed};
    `}

  ${(props) =>
    props.isPasswordValidate &&
    css`
      border: 1px solid ${palette.warningRed};
    `}

  ${(props) =>
    props.isPasswordConfirmValidate &&
    css`
      border: 1px solid ${palette.warningRed};
    `}
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
  margin-top: 40px;
`;

export default RegisterTemplate;
