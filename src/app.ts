import express from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from "./router/router";
import { swaggerSpec, swaggerUi } from "./config/swaggerConfig";
import { errorHandler } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/requestLogger";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(cors());
app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);
app.use(requestLogger);
const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
	console.log("The application is listening on port 3000!");
});
