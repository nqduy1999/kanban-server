import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as path from 'path';
import { authRouter, boardRouter, sectionRouter, taskRouter } from "./v1/routes";

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors())
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use('/api/v1/auth', authRouter)
    this.app.use('/api/v1/board', boardRouter)
    this.app.use('/api/v1/section', sectionRouter)
    this.app.use('/api/v1/task', taskRouter)

  }

}

export default new App().app;