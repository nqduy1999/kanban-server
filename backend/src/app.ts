import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as path from 'path';
import { authRouter, boardRouter, sectionRouter, taskRouter } from "./v1/routes";
import * as dotenv from "dotenv";


const app: express.Application = express()
dotenv.config()
config()

function config(): void {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors())
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/board', boardRouter)
  app.use('/api/v1/section', sectionRouter)
  app.use('/api/v1/task', taskRouter)

}

export default app;