import express from "express";
import { getFile, postFile, read } from "./controller";
import { uploadTxt } from "./middleware";

const fileRouter = express.Router();

fileRouter.get("/", getFile);
fileRouter.post("/read", uploadTxt, postFile);
export default fileRouter;
