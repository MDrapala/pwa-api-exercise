import * as core from "express-serve-static-core";
import {
  createItems,
  updateItems,
  deleteItems,
  findAllItems,
} from "../controllers/items.controller";

export const ItemsRoute = (app: core.Express) => {
  app.post("/task", createItems);
  app.put("/task/:id", updateItems);
  app.delete("/task/:id", deleteItems);
  app.get("/task", findAllItems);
};
