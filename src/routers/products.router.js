import { Router } from "express";
import Product from "../dao/models/product.model.js";

const apiProductsRouter = Router();

// RUTAS
apiProductsRouter.post("/", createProduct);
apiProductsRouter.get("/", readProducts);


// FUNCIONES
async function createProduct(req, res, next) {
    try {
        const data = req.body;
        const one = await Product.create(data);
        return res.status(200).json({ message: "CREATED.", response: one })
    } catch (error) {
        return res.status(500).json({ error });

    }
}

async function readProducts(req, res, next) {
    try {
        const all = await Product.find();
        return res.status(200).json({ message: "READED.", response: all })
    } catch (error) {
        return res.status(500).json({ error });

    }
}

export default apiProductsRouter;