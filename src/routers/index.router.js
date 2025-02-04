import productsApiRouter from "./products.api.js";
import sessionApiRouter from "./sessions.api.js";
import usersApiRouter from "./users.api.js";
import cartsApiRouter from "./carts.api.js";
import processApiRouter from "./process.api.js";
import CustomRouter from "../utils/CustomRouter.util.js";
import { fork } from "child_process";

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
    }
}

let apiRouter = new ApiRouter();
export default apiRouter.getRouter();
