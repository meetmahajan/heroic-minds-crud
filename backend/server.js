import express from "express";
const app = express();

import App from "./app.js";
import Router from "./routes/router.js";

new App(app).setupMiddlewares();
new Router(app);
const port = 5000;

app.listen(port, () =>
  console.log(`Server is listening on port: http://localhost:${port}`)
);
