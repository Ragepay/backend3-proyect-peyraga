import {
    createMockUsers,
    createMockProducts
} from "../services/mocks.service.js";

async function createMocks(req, res) {
    const { users, products } = req.params;
    const message = `MOCKS CREATED: ${users} Users and ${products} Products.`;
    const response = { users: await createMockUsers(users), products: await createMockProducts(products) };
    return res.json200(message, response);
}

export {
    createMocks
};