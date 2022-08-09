export class SentException extends Error {
  constructor() {
    super('The CSVs were already sent today');
    Object.setPrototypeOf(this, SentException.prototype);
  }
}
