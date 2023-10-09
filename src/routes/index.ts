import { Router } from "express";
import ItemController from "../controllers/ItemController";

const AppRouter = Router();

AppRouter.post("/products", ItemController.createItem);
AppRouter.get("/products", ItemController.getAll);
AppRouter.get("/products/:id", ItemController.getById);

export default AppRouter;