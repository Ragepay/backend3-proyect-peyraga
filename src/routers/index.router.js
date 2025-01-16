import { Router } from "express";
import apiProductsRouter from "./products.router.js";

const apiIndex = Router();

apiIndex.use("/products", apiProductsRouter);
//apiIndex.use("/sessions", apiProductsRouter);
//apiIndex.use("/carts", apiProductsRouter);
//apiIndex.use("/users", apiProductsRouter);


export default apiIndex;