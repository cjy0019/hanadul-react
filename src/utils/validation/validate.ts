interface ValidateInterface {
  email: (emailAddress: string) => boolean;
  password: (userPassword: string) => boolean;
  passwordConfirm: (userPassword: string, userPasswordConfirm: string) => boolean;
}

export class Validate implements ValidateInterface {
  static EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  static PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  email(email: string) {
    return Validate.EMAIL_REGEX.test(email);
  }

  password(userPassword: string) {
    return Validate.PASSWORD_REGEX.test(userPassword);
  }

  passwordConfirm(userPassword: string, userPasswordConfirm: string) {
    return userPassword === userPasswordConfirm;
  }
}
