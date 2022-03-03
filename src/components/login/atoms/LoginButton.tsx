import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

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
      color: ${({ theme }) => theme.colors.white};
      background-color: ${(props) => props.theme.colors.lightGreen};
    `}

  ${(props) =>
    props.buttonTheme === 'google' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
    `}

    ${(props) =>
    props.buttonTheme === 'kakao' &&
    css`
      background-color: ${(props) => props.theme.colors.mustard};
    `}

    ${(props) =>
    props.buttonTheme === 'apple' &&
    css`
      background-color: ${(props) => props.theme.colors.lightRed};
    `}
`;
export default LoginButton;
