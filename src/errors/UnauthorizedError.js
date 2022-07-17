class UnauthorizedError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'UnauthorizedError';
    this.status = status;
  }
}

module.exports = UnauthorizedError;

/* Dica do Wendryo de adicionar a chave status */