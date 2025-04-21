import { Router } from "express";
import recipeController from "./controllers/recipeController.js";

const routes = Router();

routes.use("/recipe", recipeController);

export default routes;

