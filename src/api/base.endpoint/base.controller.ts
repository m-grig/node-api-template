import express from 'express';
import { ApiResponse } from '../types';

const buildResponse = (data: any, success: boolean): ApiResponse<any> => {
  return {
    success,
    data: data,
  };
};

export class Controller {
  public router = express.Router();
  public path: string = '';
  private database: any[] = [];

  constructor(connection?: unknown /* add orm object here */) {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.post(this.path, this.create);
  }

  getAll = (request: express.Request, response: express.Response) /*: ApiResponse<Entity[]>*/ => {
    const responseBody = buildResponse(this.database, true);
    response.send(responseBody);
  };
  create = (request: express.Request, response: express.Response) /*: ApiResponse<Entity>*/ => {
    const entity = request.body;
    this.database.push(entity);
    const responseBody = buildResponse(entity, true);
    response.send(responseBody);
  };
  delete = () /*: void*/ => {
    throw Error('Note implemented');
  };
  update = () /*: ApiResponse<Entity>*/ => {
    throw Error('Note implemented');
  };
}
