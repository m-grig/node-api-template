import express from 'express';

export function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: any
) {
  console.log(`${request.method} ${request.path}`);
  console.log(request.body);
  next();
}
