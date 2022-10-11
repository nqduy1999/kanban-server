import * as logger from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as path from "path";
import * as dotenv from "dotenv";
import {
  authRouter,
  boardRouter,
  sectionRouter,
  taskRouter,
  adminRouter,
} from "./v1/routes";
import * as express from "express";
import * as bodyParser from "body-parser";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    dotenv.config();
  }

  private config(): void {
    // Giúp chúng ta tiếp nhận dữ liệu từ body của request
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use("/api/v1/auth", authRouter);
    this.app.use("/api/v1/boards", boardRouter);
    this.app.use("/api/v1/section", sectionRouter);
    this.app.use("/api/v1/task", taskRouter);
    this.app.use("/api/v1/admin", adminRouter);
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
