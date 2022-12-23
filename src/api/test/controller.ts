import express from 'express';
import { Controller } from '../base.endpoint/base.controller';
import { Test } from './types';
// entity type = Test

export class TestController extends Controller {
  public path = '/test';

  getAll = (request: express.Request, response: express.Response) /*: ApiResponse<Test[]>*/ => {
    super.getAll(request, response); // override call and perform additional logic
  };
}
