//import envUtil from "./src/utils/env.util.js";
import { expect } from "chai";
import supertest from "supertest";
//const { MONGO_LINK } = envUtil;

const requester = supertest("http://localhost:9000/api");

describe("Testing login, create & delete product, signout.", () => {
    const user = { email: "benjapey@gmail.com", password: "Hola1234" }
    let cookie
    let productId
    it("POST /sessions/login should respond with status code 200", async () => {
        const response = await requester.post("/sessions/login").send(user);
        const { status, headers } = response;
        cookie = headers["set-cookie"];
        expect(status).to.be.equal(200);
    });
    it("POST /product should responde with a new _id of product with type of object", async () => {
        const response = await requester.post("/products").set("Cookie", cookie).send({ name: "producto de prueba" });
        const { _body } = response;
        productId = _body.response._id;
        expect(_body.response).to.be.an("object");
    });
    it("DELETE /product/:id should delete product. GET products/:id response with a status 404.", async () => {
        await requester.delete("/products/" + productId).set("Cookie", cookie);
        const response = await requester.get("/products/" + productId);
        const { status } = response;
        expect(status).to.be.equal(404);
    });
    it("POST /sessions/signout should respond with 'USER SIGN OUT.' ", async () => {
        const response = await requester.post("/sessions/signout").set("Cookie", cookie);
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("USER SIGN OUT.");
    });
});

describe("User Authentication: Register 'Already Exists', Login, is Online and Signout.", () => {
    const user = { email: "benjapey@gmail.com", password: "Hola1234" };
    let cookie;
    it("POST /sessions/register should respond with 'USER ALREADY EXISTS.' ", async () => {
        const response = await requester.post("/sessions/register").send(user);
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("USER ALREADY EXISTS.");
    });
    it("POST /sessions/login should respond with status code 200. ", async () => {
        const response = await requester.post("/sessions/login").send(user);
        const { status, headers } = response;
        cookie = headers["set-cookie"];
        expect(status).to.be.equal(200);
    });
    it("POST /sessions/online should respond with online: true ", async () => {
        const response = await requester.post("/sessions/online").set("Cookie", cookie);
        const { _body } = response;
        const { online } = _body.response;
        expect(online).to.be.equal(true);
    });
    it("POST /sessions/signout should respond with 'USER SIGN OUT.'", async () => {
        const response = await requester.post("/sessions/signout").set("Cookie", cookie);
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("USER SIGN OUT.");
    });
});

describe("Login. Product CRUD Operations. Signout.", () => {
    const user = { email: "benjapey@gmail.com", password: "Hola1234" };
    let cookie;
    let productId;
    it("POST /sessions/login should respond with status code 200. ", async () => {
        const response = await requester.post("/sessions/login").send(user);
        const { status, headers } = response;
        cookie = headers["set-cookie"];
        expect(status).to.be.equal(200);
    });
    it("GET /carts/:id should retrieve the cart with status 200 ", async () => {
        const response = await requester.get("/carts/").set("Cookie", cookie);
        const { status } = response;
        expect(status).to.be.equal(200);
    });
    it("POST /products should create a new product (An object) and return its _id", async () => {
        const response = await requester.post("/products").set("Cookie", cookie).send({ name: "New Product" });
        const { _body } = response;
        productId = _body.response._id;
        expect(_body.response).to.be.an("object");
    });
    it("GET /products/:id should retrieve the created product with message 'PRODUCT FOUND' ", async () => {
        const response = await requester.get("/products/" + productId);
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("PRODUCT FOUND.");
    });
    it("PUT /products/:id after update should return with message 'PRODUCT UPDATED' ", async () => {
        const response = await requester.put("/products/" + productId).set("Cookie", cookie).send({ price: 1500 });
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("PRODUCT UPDATED");
    });
    it("GET /products/:id product price to be equals 1500", async () => {
        const response = await requester.get("/products/" + productId);
        const { _body } = response;
        const { price } = _body.response;
        expect(price).to.be.equal(1500);
    });
    it("DELETE /products/:id should delete the product with status 200 ", async () => {
        const response = await requester.delete("/products/" + productId).set("Cookie", cookie);
        const { status } = response;
        expect(status).to.be.equal(200);
    });
    it("GET /products/:id after delete should return status 404 Not Found", async () => {
        const response = await requester.get("/products/" + productId);
        const { status } = response;
        expect(status).to.be.equal(404);
    });
    it("POST /sessions/signout should respond with 'USER SIGN OUT.' ", async () => {
        const response = await requester.post("/sessions/signout").set("Cookie", cookie);
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("USER SIGN OUT.");
    });
});

describe("Artillery Simplex operation and Complex operation. Mocks users and products by params.F", () => {
    let mocks = { user: 2, products: 3 }
    it("GET /artillery/simplex should respond with status code 200. ", async () => {
        const response = await requester.get("/artillery/simplex");
        const { status } = response;
        expect(status).to.be.equal(200);
    });
    it("GET /artillery/complex should respond with status code 200. ", async () => {
        const response = await requester.get("/artillery/complex");
        const { status } = response;
        expect(status).to.be.equal(200);
    });
    it("POST /mocks/:users/:products should create 2 users and 3 products witch message 'MOCKS CREATED: 2 Users and 3 Products.' ", async () => {
        const response = await requester.post("/mocks/" + mocks.user + "/" + mocks.products);
        const { _body } = response;
        const message = _body.message;
        expect(message).to.be.equal("MOCKS CREATED: 2 Users and 3 Products.");
    });
});
