import { faker } from "@faker-js/faker";

function createMockProduct() {
    const name = faker.commerce.productName();
    const description = faker.commerce.productDescription();
    const stock = faker.number.int(100);
    const price = faker.commerce.price({ min: 100, max: 2000, dec: 2 });
    const image = faker.image.url();
    const category = "";
    return { name, description, stock, price, image, category };
}

export { createMockProduct };