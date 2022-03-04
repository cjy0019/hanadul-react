import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../styles/palette';

type ButtonTheme = 'kakao' | 'apple' | 'email' | 'google';

interface ButtonProps {
  children?: ReactNode | undefined;
  handleClick?: () => void;
  buttonTheme: ButtonTheme;
}

const LoginButton: FC<ButtonProps> = ({ children, handleClick, buttonTheme }) => {
  return (
    <Button buttonTheme={buttonTheme} onClick={handleClick}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ buttonTheme?: ButtonTheme }>`
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  ${(props) =>
    props.buttonTheme === 'email' &&
    css`
      color: ${palette.white};
      background-color: ${palette.lightGreen};
    `}

  ${(props) =>
    props.buttonTheme === 'google' &&
    css`
      background-color: ${palette.white};
    `}

    ${(props) =>
    props.buttonTheme === 'kakao' &&
    css`
      background-color: ${palette.mustard};
    `}

    ${(props) =>
    props.buttonTheme === 'apple' &&
    css`
      background-color: ${palette.lightRed};
    `}
`;
export default LoginButton;
