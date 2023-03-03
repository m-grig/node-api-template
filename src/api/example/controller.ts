import { Request, Response } from 'express';
import { Controller } from '../base/base.controller';
import { Test } from './types';
// entity type = Test

export class TestController extends Controller {
  path = '/test';

  getAll(request: Request, response: Response) /*: ApiResponse<Test[]>*/ {
    return super.getAll(request, response); // override call and perform additional logic
  }
}
