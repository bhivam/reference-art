import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import Logging from "./logging";

dotenv.config();

const app: Express = express();

function start_server() {
  app.use(function (req: Request, res: Response, next) {
    Logging.info(
      `Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}]`,
    );

    res.on("finish", function () {
      Logging.info(
        `Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`,
      );
    });

    next();
  });

  app.use(helmet());
  app.use(cors());
  // app.use(express.json({ limit: "50mb" }));

  app.get("/", function (req: Request, res: Response) {
    res.send("pong!");
  });

  app.use(function (req: Request, res: Response) {
    const error = new Error("not found");
    Logging.error(error);

    return res.status(404).json({ message: error.message });
  });
}

export { app, start_server};
