import React from 'react';
import LoginButton from '../atoms/LoginButton';

const LoginTemplate = () => {
  return (
    <div>
      <LoginButton buttonTheme="email">Email Login</LoginButton>
      <LoginButton buttonTheme="google">Google Login</LoginButton>
      <LoginButton buttonTheme="kakao">Kakao Login</LoginButton>
      <LoginButton buttonTheme="apple">Apple Login</LoginButton>
    </div>
  );
};

export default LoginTemplate;
