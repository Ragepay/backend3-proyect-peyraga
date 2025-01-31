import { Router } from "express";
import { createProduct, readProducts, createMockProduct, createMockProducts } from "../controllers/products.controller.js";

const apiProductsRouter = Router();

// RUTAS
apiProductsRouter.post("/", createProduct);
apiProductsRouter.get("/", readProducts);
apiProductsRouter.get("/mocks", createMockProduct);
apiProductsRouter.get("/mocks/:quantity", createMockProducts);


export default apiProductsRouter;