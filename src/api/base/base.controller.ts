import express from 'express';
import { BaseService } from './base.service';
import { sendResponse } from './response';

const EMPTY = '';
const service = new BaseService();

export class Controller {
  public router = express.Router();
  public path: string = '/';

  constructor(connection?: unknown /* add orm object here */) {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(EMPTY, this.getAll);
    this.router.post(EMPTY, this.create);
  }

  async getAll(request: express.Request, response: express.Response) /*: ApiResponse<Entity[]>*/ {
    const entity = await service.getAll(request.params);
    sendResponse(response, entity);
  }
  async create(request: express.Request, response: express.Response) /*: ApiResponse<Entity>*/ {
    const entity = await service.create(request.body);
    sendResponse(response, entity);
  }
  async delete() /*: void*/ {
    throw Error('Note implemented');
  }
  async update() /*: ApiResponse<Entity>*/ {
    throw Error('Note implemented');
  }
}
