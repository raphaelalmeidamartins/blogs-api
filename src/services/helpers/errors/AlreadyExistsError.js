class AlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AlreadyExistsError';
  }
}

module.exports = AlreadyExistsError;
