interface ValidateInterface {
  email: (emailAddress: string) => boolean;
  password: (myPassword: string) => boolean;
}

export class Validate implements ValidateInterface {
  static EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  email(email: string) {
    return Validate.EMAIL_REGEX.test(email);
  }

  password(myPassword: string) {
    return false;
  }
}
