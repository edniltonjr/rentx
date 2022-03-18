import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3333, () => console.log("Server is running!"));
