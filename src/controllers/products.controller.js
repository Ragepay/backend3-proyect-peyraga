import { createService, readService } from "../services/products.service.js";

// FUNCIONES
async function createProduct(req, res, next) {
    try {
        const data = req.body;
        const one = await createService(data);
        return res.status(200).json({ message: "CREATED.", response: one })
    } catch (error) {
        return res.status(500).json({ error });

    }
}

async function readProducts(req, res, next) {
    try {
        const all = await readService();
        return res.status(200).json({ message: "READED.", response: all })
    } catch (error) {
        return res.status(500).json({ error });

    }
}

export { createProduct, readProducts };