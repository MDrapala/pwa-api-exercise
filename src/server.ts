require("dotenv").config();
import * as core from "express-serve-static-core";
import express from "express";
import cors from "cors";
import { CleanDataBase } from "./tools/cleanDatabase";
import Database from "./models";

// Routes
import { ItemsRoute } from "./routes/items.route";

// Constant
let { PORT } = process.env;

const app: core.Express = express();

app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

//Sequelize
CleanDataBase(false); //Remove Database: true || false
Database.sequelize.sync();

//Imports Routes
ItemsRoute(app);

//Define Project API
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ShopTitan application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
