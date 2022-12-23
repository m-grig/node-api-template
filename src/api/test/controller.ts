import express from 'express';
import { ApiResponse } from '../types';
import { Test } from './types';

const path = '/test';

const buildResponse = (data: any, success: boolean): ApiResponse<any> => {
  return {
    success,
    data: data,
  };
};

export class TestController {
  public router = express.Router();

  private tests: Test[] = [{ message: 'this is a test message', id: '123abcHexId' }];

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(path, this.getAllTests);
    this.router.post(path, this.createTest);
  }

  getAllTests = (request: express.Request, response: express.Response): ApiResponse<Test[]> => {
    const responseBody = buildResponse(this.tests, true);
    response.send(responseBody);
    return responseBody;
  };

  createTest = (request: express.Request, response: express.Response): ApiResponse<Test> => {
    const test: Test = request.body;
    this.tests.push(test);
    const responseBody = buildResponse(test, true);
    response.send(responseBody);
    return responseBody;
  };
}
