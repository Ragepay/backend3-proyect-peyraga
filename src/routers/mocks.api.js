import CustomRouter from "../utils/CustomRouter.util.js";
import { createMocks } from "../controllers/mocks.controller.js";

class MocksApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    
    init = () => {
        // Post mocks dinamicos
        this.create("/:users/:products", ["PUBLIC"], createMocks);
    };
}

const mocksApiRouter = new MocksApiRouter();
export default mocksApiRouter.getRouter();

