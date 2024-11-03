import express from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from "./router/router";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(cors());
app.use("/", router);
const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
	console.log("The application is listening on port 3000!");
});
