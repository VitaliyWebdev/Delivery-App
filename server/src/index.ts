import express from "express";
import bodyParser from "body-parser";
import mongooseConnect from "./configs/mongooseConnect";
import * as dotenv from "dotenv";
import apiRouter from "./api";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/", apiRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
