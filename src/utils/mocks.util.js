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

/* 
faker.commerce (para productos):
- faker.commerce.productName(): Devuelve un nombre de producto aleatorio (ej. "Fancy Steel Table").
- faker.commerce.productMaterial(): Devuelve un material de producto aleatorio (ej. "Plastic", "Wood").
- faker.commerce.product(): Devuelve una descripción corta de un producto aleatorio.
- faker.commerce.price(): Devuelve un precio aleatorio.
- faker.commerce.department(): Devuelve una categoría de producto aleatoria (ej. "Electronics", "Books").
- faker.commerce.productAdjective(): Devuelve un adjetivo de producto aleatorio (ej. "Fresh", "New").
- faker.commerce.productDescription(): Devuelve una descripción de producto aleatoria (ej. "High quality, perfect for your office").
- faker.commerce.productColor(): Devuelve un color aleatorio de producto.
- faker.commerce.productMaterial(): Devuelve el material del producto (ej. "Wood", "Steel").

faker.random (para stock):
- faker.random.number(): Devuelve un número aleatorio (útil para simular stock, por ejemplo).
- faker.random.arrayElement(): Devuelve un valor aleatorio de un array (por ejemplo, para stock podría ser "in stock" o "out of stock").
  
faker.name (para usuario):
- faker.name.firstName(): Devuelve un primer nombre aleatorio.
- faker.name.lastName(): Devuelve un apellido aleatorio.
- faker.name.findName(): Devuelve un nombre completo aleatorio (primer nombre + apellido).
- faker.name.jobTitle(): Devuelve un título de trabajo aleatorio (ej. "Software Engineer").
- faker.name.prefix(): Devuelve un prefijo para nombres (ej. "Dr.", "Mr.", "Ms.").
- faker.name.suffix(): Devuelve un sufijo para nombres (ej. "Jr.", "Sr.", "III").

faker.internet (para usuario):
- faker.internet.email(): Devuelve una dirección de correo electrónico aleatoria.
- faker.internet.userName(): Devuelve un nombre de usuario aleatorio.
- faker.internet.password(): Devuelve una contraseña aleatoria.
- faker.internet.url(): Devuelve una URL aleatoria.
- faker.internet.domainName(): Devuelve un nombre de dominio aleatorio.
- faker.internet.ip(): Devuelve una dirección IP aleatoria.
- faker.internet.mac(): Devuelve una dirección MAC aleatoria.

faker.phoneNumber (para usuario):
- faker.phoneNumber.phoneNumber(): Devuelve un número de teléfono aleatorio.
- faker.phoneNumber.cellPhone(): Devuelve un número de teléfono celular aleatorio.

faker.address (para dirección de usuario):
- faker.address.city(): Devuelve una ciudad aleatoria.
- faker.address.streetAddress(): Devuelve una dirección de calle aleatoria.
- faker.address.state(): Devuelve un estado aleatorio.
- faker.address.zipCode(): Devuelve un código postal aleatorio.
- faker.address.country(): Devuelve un país aleatorio.
  
faker.date (para usuario y productos):
- faker.date.past(): Devuelve una fecha aleatoria en el pasado.
- faker.date.future(): Devuelve una fecha aleatoria en el futuro.

faker.image (para productos):
- faker.image.imageUrl(): Devuelve una URL de imagen aleatoria.
- faker.image.avatar(): Devuelve una URL de imagen de avatar aleatoria.
- faker.image.image(): Devuelve una URL de imagen aleatoria con tamaño específico.
- faker.image.business(): Devuelve una URL de imagen de tipo "business".
- faker.image.nature(): Devuelve una URL de imagen de tipo "nature".

faker.system (para usuario):
- faker.system.filePath(): Devuelve una ruta de archivo aleatoria.
- faker.system.fileName(): Devuelve un nombre de archivo aleatorio.
*/


/* 
faker.commerce (para productos):
- faker.commerce.productName(): Devuelve un nombre de producto aleatorio (ej. "Fancy Steel Table").
- faker.commerce.productMaterial(): Devuelve un material de producto aleatorio (ej. "Plastic", "Wood").
- faker.commerce.product(): Devuelve una descripción corta de un producto aleatorio.
- faker.commerce.price(): Devuelve un precio aleatorio.
- faker.commerce.department(): Devuelve una categoría de producto aleatoria (ej. "Electronics", "Books").
- faker.commerce.productAdjective(): Devuelve un adjetivo de producto aleatorio (ej. "Fresh", "New").
- faker.commerce.productDescription(): Devuelve una descripción de producto aleatoria (ej. "High quality, perfect for your office").
- faker.commerce.productColor(): Devuelve un color aleatorio de producto.

faker.name (para usuarios):
- faker.name.firstName(): Devuelve un primer nombre aleatorio.
- faker.name.lastName(): Devuelve un apellido aleatorio.
- faker.name.findName(): Devuelve un nombre completo aleatorio (primer nombre + apellido).
- faker.name.jobTitle(): Devuelve un título de trabajo aleatorio (ej. "Software Engineer").
- faker.name.prefix(): Devuelve un prefijo para nombres (ej. "Dr.", "Mr.", "Ms.").
- faker.name.suffix(): Devuelve un sufijo para nombres (ej. "Jr.", "Sr.", "III").

faker.internet (para usuarios):
- faker.internet.email(): Devuelve una dirección de correo electrónico aleatoria.
- faker.internet.userName(): Devuelve un nombre de usuario aleatorio.
- faker.internet.password(): Devuelve una contraseña aleatoria.
- faker.internet.url(): Devuelve una URL aleatoria.
- faker.internet.domainName(): Devuelve un nombre de dominio aleatorio.
- faker.internet.ip(): Devuelve una dirección IP aleatoria.
- faker.internet.mac(): Devuelve una dirección MAC aleatoria.

faker.phoneNumber (para usuarios):
- faker.phoneNumber.phoneNumber(): Devuelve un número de teléfono aleatorio.
- faker.phoneNumber.cellPhone(): Devuelve un número de teléfono celular aleatorio.
*/


/* 
faker.address:
- faker.address.city(): Devuelve una ciudad aleatoria.
- faker.address.cityName(): Devuelve solo el nombre de una ciudad.
- faker.address.country(): Devuelve un país aleatorio.
- faker.address.countryCode(): Devuelve el código de un país (por ejemplo, 'US').
- faker.address.zipCode(): Devuelve un código postal aleatorio.
- faker.address.streetName(): Devuelve el nombre de una calle aleatoria.
- faker.address.streetAddress(): Devuelve una dirección completa de calle.
- faker.address.state(): Devuelve un estado o provincia aleatoria.
- faker.address.stateAbbr(): Devuelve una abreviatura de estado (ej. "CA" para California).

faker.name:
- faker.name.firstName(): Devuelve un primer nombre aleatorio.
- faker.name.lastName(): Devuelve un apellido aleatorio.
- faker.name.findName(): Devuelve un nombre completo aleatorio (primer nombre + apellido).
- faker.name.jobTitle(): Devuelve un título de trabajo aleatorio (ej. "Software Engineer").
- faker.name.prefix(): Devuelve un prefijo para nombres (ej. "Dr.", "Mr.", "Ms.").
- faker.name.suffix(): Devuelve un sufijo para nombres (ej. "Jr.", "Sr.", "III").

faker.internet:
- faker.internet.email(): Devuelve una dirección de correo electrónico aleatoria.
- faker.internet.userName(): Devuelve un nombre de usuario aleatorio.
- faker.internet.password(): Devuelve una contraseña aleatoria.
- faker.internet.url(): Devuelve una URL aleatoria.
- faker.internet.domainName(): Devuelve un nombre de dominio aleatorio.
- faker.internet.ip(): Devuelve una dirección IP aleatoria.
- faker.internet.mac(): Devuelve una dirección MAC aleatoria.

faker.phoneNumber:
- faker.phoneNumber.phoneNumber(): Devuelve un número de teléfono aleatorio.
- faker.phoneNumber.cellPhone(): Devuelve un número de teléfono celular aleatorio.

faker.commerce:
- faker.commerce.productName(): Devuelve un nombre de producto aleatorio (ej. "Fancy Steel Table").
- faker.commerce.productMaterial(): Devuelve un material de producto aleatorio (ej. "Plastic", "Wood").
- faker.commerce.price(): Devuelve un precio aleatorio.
- faker.commerce.department(): Devuelve una categoría de producto aleatoria (ej. "Electronics", "Books").

faker.company:
- faker.company.companyName(): Devuelve el nombre de una empresa aleatoria.
- faker.company.catchPhrase(): Devuelve una frase atractiva de una empresa aleatoria (ej. "Innovative business solutions").
- faker.company.bs(): Devuelve una declaración de empresa aleatoria (ej. "synergize scalable partnerships").
- faker.company.industry(): Devuelve una industria aleatoria (ej. "Technology", "Finance").

faker.date:
- faker.date.past(): Devuelve una fecha aleatoria en el pasado.
- faker.date.future(): Devuelve una fecha aleatoria en el futuro.
- faker.date.recent(): Devuelve una fecha reciente.
- faker.date.soon(): Devuelve una fecha en el futuro cercano.
- faker.date.between(): Devuelve una fecha entre dos fechas específicas.
- faker.date.month(): Devuelve un mes aleatorio.

faker.finance:
- faker.finance.amount(): Devuelve una cantidad aleatoria de dinero.
- faker.finance.currencyCode(): Devuelve un código de moneda aleatorio (ej. "USD", "EUR").
- faker.finance.creditCardNumber(): Devuelve un número de tarjeta de crédito aleatorio.
- faker.finance.account(): Devuelve un número de cuenta bancaria aleatorio.

faker.image:
- faker.image.imageUrl(): Devuelve una URL de imagen aleatoria.
- faker.image.avatar(): Devuelve una URL de imagen de avatar aleatoria.
- faker.image.image(): Devuelve una URL de imagen aleatoria con tamaño específico.
- faker.image.business(): Devuelve una URL de imagen de tipo "business".
- faker.image.nature(): Devuelve una URL de imagen de tipo "nature".

faker.lorem:
- faker.lorem.word(): Devuelve una palabra aleatoria.
- faker.lorem.words(): Devuelve un conjunto de palabras aleatorias.
- faker.lorem.sentence(): Devuelve una oración aleatoria.
- faker.lorem.sentences(): Devuelve varias oraciones aleatorias.
- faker.lorem.paragraph(): Devuelve un párrafo aleatorio.
- faker.lorem.paragraphs(): Devuelve varios párrafos aleatorios.

faker.random:
- faker.random.arrayElement(): Devuelve un elemento aleatorio de un array.
- faker.random.objectElement(): Devuelve un valor aleatorio de un objeto.
- faker.random.number(): Devuelve un número aleatorio.
- faker.random.boolean(): Devuelve un valor booleano aleatorio (true o false).

faker.system:
- faker.system.filePath(): Devuelve una ruta de archivo aleatoria.
- faker.system.fileName(): Devuelve un nombre de archivo aleatorio.
- faker.system.semver(): Devuelve una versión semántica aleatoria (ej. "1.2.3").
- faker.system.mimetype(): Devuelve un tipo MIME aleatorio (ej. "application/json").
*/
