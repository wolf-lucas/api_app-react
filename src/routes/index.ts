import { Router } from "express";
import ItemController from "../controllers/ItemController";
import QueryController from "../controllers/QueryController";

const AppRouter = Router();

AppRouter.post("/products", ItemController.createItem);
AppRouter.get("/products", ItemController.getAll);
AppRouter.get("/products/:id", ItemController.getById);

AppRouter.post("/queries", QueryController.uploadQuery)

export default AppRouter;