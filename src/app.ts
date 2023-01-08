import express from 'express';
import helmet from 'helmet';
import { loggerMiddleware } from './middleware/logger';

const initializeMiddlewares = (app: express.Application) => {
  app.use(helmet());
  app.use(express.json());
  app.use(loggerMiddleware);
};
const initializeControllers = (app: express.Application, controllers: any[]) => {
  controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
  });
};

export const expressApp = (controllers: any[]): express.Application => {
  const app = express();
  initializeMiddlewares(app);
  initializeControllers(app, controllers);
  return app;
};

// choose one or the other. Function above or class below

export class App {
  public app: express.Application = express();
  public port: number;
  constructor(controllers: any[], port: number) {
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(loggerMiddleware);
  }
  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}
