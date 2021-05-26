import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.json({
    message: "ok",
  });
});

export const handler = serverless(app);
