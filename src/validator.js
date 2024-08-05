export default class Validator {
  static validateUsername(username) {
    const usernameRegex = /^(?![-_0-9])(?!.*[-_]{2,})(?!.*\d{4,})(?!.*[0-9]$)(?!.*[-_]$)[a-zA-Z0-9-_]{1,20}$/;
    return usernameRegex.test(username);
  }
}
