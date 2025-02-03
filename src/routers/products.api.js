import CustomRouter from "../utils/CustomRouter.util.js";
import passportCB from "../middlewares/passportCB.mid.js";
import { getProducts, getOneProduct, deleteProduct, updateProduct, createProduct } from "../controllers/products.controller.js"

class ProductsApiRouter extends CustomRouter {
    constructor() {
        super(/*No necesito pasarle paramaetros a la clas de CustomRouter */);
        this.init();
    }

    init = () => { // Endpoints de products
        // GET | Get all products. Public.
        this.read("/", ["PUBLIC"], getProducts);
        // GET | Get one product. Public.
        this.read("/:id", ["PUBLIC"], getOneProduct);
        // GET | Get mocks
        //this.read("/mocks", ["PUBLIC"], createMockProduct);
        // GET | Get mocks quantity
        //this.read("/mocks/:quantity", ["PUBLIC"], createMockProducts);
        // POST | Create Product. Private: Only Admins.
        this.create("/", ["ADMIN"], passportCB("admin"), createProduct);
        // PUT | Update Product. Private: Only Admins.
        this.update("/:id", ["ADMIN"], passportCB("admin"), updateProduct);
        // Delete | Delete Product. Private: Only Admins.
        this.destroy("/:id", ["ADMIN"], passportCB("admin"), deleteProduct);
    }
}

let productsApiRouter = new ProductsApiRouter();
export default productsApiRouter.getRouter();
