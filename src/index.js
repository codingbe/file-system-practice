import express from "express";
import path from "path";
import bodyParser from "body-parser";
import fileRouter from "./router";

const app = express();
const PORT = 3000;
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileRouter);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
