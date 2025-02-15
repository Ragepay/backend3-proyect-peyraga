import productsApiRouter from "./products.api.js";
import sessionApiRouter from "./sessions.api.js";
import usersApiRouter from "./users.api.js";
import cartsApiRouter from "./carts.api.js";
import processApiRouter from "./process.api.js";
import mocksApiRouter from "./mocks.api.js";
import artilleryApiRouter from "./artillery.api.js";
import CustomRouter from "../utils/CustomRouter.util.js";

class ApiRouter extends CustomRouter {
    constructor() {
        super(/*No necesito pasarle paramaetros a la clas de CustomRouter */);
        this.init();
    }

    init = () => {
        this.use("/products", ["PUBLIC"], productsApiRouter);
        this.use("/sessions", ["PUBLIC"], sessionApiRouter);
        this.use("/users", ["PUBLIC"], usersApiRouter);
        this.use("/carts", ["PUBLIC"], cartsApiRouter);
        this.use("/process", ["PUBLIC"], processApiRouter);
        this.use("/mocks", ["PUBLIC"], mocksApiRouter);
        this.use("/artillery", ["PUBLIC"], artilleryApiRouter);
    }
}

let apiRouter = new ApiRouter();
export default apiRouter.getRouter();
