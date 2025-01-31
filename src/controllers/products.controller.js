import { createService, readService, createMock, createMocks } from "../services/products.service.js";

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
        const { page } = req.query;
        const all = await readService(page);
        return res.status(200).json({ message: "READED.", response: all });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

async function createMockProduct(req, res, next) {
    try {
        const one = await createMock();
        return res.status(200).json({ message: "CREATED.", response: one });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
}

async function createMockProducts(req, res, next) {
    try {
        const { quantity } = req.params;
        const products = await createMocks(quantity);
        return res.status(200).json({ message: "CREATED.", products })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export { createProduct, readProducts, createMockProduct, createMockProducts };