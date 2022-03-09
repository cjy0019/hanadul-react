import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Validate } from '../utils/validation/validate';

type Email = {
  emailId: string;
  isValidate?: boolean;
};

type Password = {
  userPassword: string;
  isValidate?: boolean;
};

type PasswordConfirm = {
  userPasswordConfirm: string;
  isValidate?: boolean;
};

export function useRegister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<Email>({ emailId: '', isValidate: true });
  const [password, setPassword] = useState<Password>({ userPassword: '', isValidate: true });
  const [passwordConfirm, setPasswordConfirm] = useState<PasswordConfirm>({
    userPasswordConfirm: '',
    isValidate: false,
  });

  // onChange 함수로는 validate 판별 불가능(비동기 동작때문)
  useEffect(() => {
    const validate = new Validate();

    // 이메일 유효성 검사
    if (validate.email(email.emailId)) {
      setEmail({ ...email, isValidate: true });
    } else if (email.emailId.length === 0) {
      setEmail({ ...email, isValidate: true });
    } else {
      setEmail({ ...email, isValidate: false });
    }

    // 패스워드 유효성
    if (validate.password(password.userPassword)) {
      setPassword({ ...password, isValidate: true });
    } else if (password.userPassword.length === 0) {
      setPassword({ ...password, isValidate: true });
    } else {
      setPassword({ ...password, isValidate: false });
    }

    // 패스워드 확인
    if (!validate.passwordConfirm(password.userPassword, passwordConfirm.userPasswordConfirm)) {
      setPasswordConfirm({ ...passwordConfirm, isValidate: true });
    } else {
      setPasswordConfirm({ ...passwordConfirm, isValidate: false });
    }
  }, [
    email.emailId,
    email.isValidate,
    email.emailId.length,
    passwordConfirm.userPasswordConfirm,
    password.userPassword,
    password.isValidate,
  ]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleEmail = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(
    (e) => {
      setEmail({ ...email, emailId: e.target.value });
    },
    [email]
  );

  const handlePassword = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(
    (e) => {
      setPassword({ ...password, userPassword: e.target.value, isValidate: true });
    },
    [password]
  );

  const handlePasswordConfirm = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(
    (e) => {
      setPasswordConfirm({ ...passwordConfirm, userPasswordConfirm: e.target.value });
    },
    [passwordConfirm]
  );

  return {
    goBack,
    handleEmail,
    handlePassword,
    email,
    password,
    passwordConfirm,
    handlePasswordConfirm,
    setPasswordConfirm,
  };
}
