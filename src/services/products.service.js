import Product from "../dao/models/product.model.js";
import { createMockProduct } from "../utils/mocks.util.js";

// FUNCIONES
async function createService(data) {
    const one = await Product.create(data);
    return one;
}

async function readService(page) {
    const all = await Product.paginate({}, { page, sort: { name: 1, }, select: "-__V -createAt -updateAt" });
    return all;
}

async function createMock() {
    const data = createMockProduct();
    const one = await Product.create(data);
    return one;
}


async function createMocks(quantity) {
    const products = await Promise.all(
        Array.from({ length: quantity }, () => createMockProduct())
    );

    await Promise.all(products.map(product => Product.create(product)));

    return products;
}




export { createService, readService, createMock, createMocks };