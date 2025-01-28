import { Router } from "express";
import { createProduct, readProducts } from "../controllers/products.controller.js";

const apiProductsRouter = Router();

// RUTAS
apiProductsRouter.post("/", createProduct);
apiProductsRouter.get("/", readProducts);

export default apiProductsRouter;