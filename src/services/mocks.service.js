import dao from "../dao/index.factory.js";
import { createMockProduct, createMockUser } from "../utils/mocks.util.js";
import { createProductsService } from "./products.service.js";


const { UsersManager } = dao;

async function createMockUsers(quantity) {
    // Creamos el array de Users, que sera devuelto al controlador.
    const users = [];
    // Hacemos un ciclo for hasta la cantidad pedida pro query params
    for (let index = 0; index < quantity; index++) {
        // Creamos un usuario mediante un mock de user.
        const one = await createMockUser();
        // Lo guardamos en la persistencia.
        const user = await UsersManager.create(one);
        // Lo pusheamos en el array.
        users.push(user);
    }
    return users;
}

async function createMockProducts(quantity) {
    // Creamos el array de Products, que sera devuelto al controlador.
    const products = [];
    // Hacemos un ciclo for hasta la cantidad pedida pro query params
    for (let index = 0; index < quantity; index++) {
        // Creamos un usuario mediante un mock de user.
        const one = await createMockProduct();
        // Lo guardamos en la persistencia.
        const product = await createProductsService(one);
        // Lo pusheamos en el array.
        products.push(product);
    }
    return products;
}

export {
    createMockUsers,
    createMockProducts
};