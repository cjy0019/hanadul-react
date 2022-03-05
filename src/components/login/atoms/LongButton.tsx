import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../styles/palette';

type ButtonTheme = 'kakao' | 'apple' | 'email' | 'google' | 'goBack';

interface ButtonProps {
  children?: ReactNode | undefined;
  handleClick?: () => void;
  buttonTheme: ButtonTheme;
}

const LongButton: FC<ButtonProps> = ({ children, handleClick, buttonTheme }) => {
  return (
    <Button buttonTheme={buttonTheme} onClick={handleClick}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ buttonTheme?: ButtonTheme }>`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  font-size: 1.1rem;

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

    ${(props) =>
    props.buttonTheme === 'goBack' &&
    css`
      background-color: ${palette.warningRed};
      color: ${palette.white};
    `}
`;
export default LongButton;
