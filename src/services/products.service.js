import Product from "../dao/models/product.model.js";

// FUNCIONES
async function createService(data) {
    const one = await Product.create(data);
    return one;
}

async function readService() {
    const all = await Product.find();
    return all;
}

export { createService, readService };