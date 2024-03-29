export const EMAIL_REGEX =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export enum ErrorType {
  Email = 'email',
  Password = 'password',
  InvalidData = 'invalid-data'
}
