import {
    readProductsService,
    readOneProductsService,
    createProductsService,
    updateProductsService,
    deleteProductsService
} from "../services/products.service.js";

// Funciones CallBacks. Funciones de negocio, controladores.---------------------------------------------------------------------------------------------
// Function getProducts.
async function getProducts(req, res, next) {
    const message = "PRODUCTS FOUND.";
    const product = await readProductsService();
    res.json200(product, message);
};

// Function getOneProduct.
async function getOneProduct(req, res, next) {
    const { id } = req.params;
    const message = "PRODUCT FOUND.";
    const product = await readOneProductsService(id);
    if (product) {
        return res.json200(product, message);
    } else {
        return res.json404(product, message);
    }
}

// Function creatProduct.
async function createProduct(req, res, next) {
    const data = req.body;
    const message = "PRODUCT CREATED";
    const product = await createProductsService(data);
    res.json201(product, message);
}

// Function updateProduct.
async function updateProduct(req, res, next) {
    const data = req.body;
    const { id } = req.params;
    const message = "PRODUCT UPDATED";
    const product = await updateProductsService(id, data);
    if (product) {
        return res.json200(product, message);
    } else {
        return res.json404(product, message);
    }
}

// Function deleteProduct.
async function deleteProduct(req, res, next) {
    const { id } = req.params;
    const message = "PRODUCT DELETED";
    const product = await deleteProductsService(id);
    if (product) {
        return res.json200(product, message);
    } else {
        return res.json404(product, message);
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

export {
    getProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
    createProduct,
    createMockProduct,
    createMockProducts
};