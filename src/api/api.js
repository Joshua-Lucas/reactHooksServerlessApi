import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import router from "./apiRouter";

const app = express();

app.disable("x-powered-by");

app.use(cors());

app.use("/", router);

export const handler = serverless(app);
