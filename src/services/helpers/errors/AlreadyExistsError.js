class AlreadyExistsError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'AlreadyExistsError';
    this.status = status;
  }
}

module.exports = AlreadyExistsError;

/* Dica do Wendryo de adicionar a chave status */