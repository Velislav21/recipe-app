import { Router } from "express";
import recipeController from "./controllers/recipeController.js";

const routes = Router();

routes.use("/recipes", recipeController);

export default routes;

