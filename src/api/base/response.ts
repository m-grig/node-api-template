import { Response } from 'express';
import { ApiResponse } from './types.js';

const buildResponse = (data: any) => {
  const responsePayload: ApiResponse<any> = {
    success: true,
    data: data,
  };
  return JSON.stringify(responsePayload);
};

const setHeaders = (response: Response) => {
  response.setHeader('Content-Type', 'application/json');
};

export const sendResponse = (response: Response, data: any) => {
  setHeaders(response);
  const responsePayload = buildResponse(data);
  response.send(responsePayload);
};
