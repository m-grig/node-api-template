import express from 'express';
import { ApiResponse } from '../types';
import { Test } from './types';

const buildResponse = (data: any, success: boolean): ApiResponse<any> => {
  return {
    success,
    data: data,
  };
};

export class TestController {
  public path = '/test';
  public router = express.Router();

  private testResponse: ApiResponse<Test> = {
    success: true,
    data: { message: 'this is a test message', id: '123abcHexId' },
  };
  private tests: Test[] = [{ message: 'this is a test message', id: '123abcHexId' }];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllTests);
    this.router.post(this.path, this.createTest);
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
