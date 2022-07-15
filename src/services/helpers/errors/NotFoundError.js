class NotFoundError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'NotFoundError';
    this.status = status;
  }
}

module.exports = NotFoundError;

/* Dica do Wendryo de adicionar a chave status */