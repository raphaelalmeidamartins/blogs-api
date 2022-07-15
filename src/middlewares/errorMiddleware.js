function errorMiddleware(err, _req, res, _next) {
  const { name, message } = err;
  switch (true) {
    case ['ValidationError'].includes(name): res.status(400).json({ message }); break;
    case ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(name):
      res.status(401).json({ message: 'Expired or invalid token' }); break;
    case ['NotFoundError'].includes(name): res.status(400).json({ message }); break;
    case ['AlreadyExistsError'].includes(name): res.status(409).json({ message }); break;
    default:
      console.warn(err);
      res.sendStatus(500);
  }
}

module.exports = errorMiddleware;
