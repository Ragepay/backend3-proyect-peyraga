import CustomRouter from "../utils/CustomRouter.util.js";
import { createMocks } from "../controllers/mocks.controller.js";
import { dividir } from "calculator-module-ragepay-1724";

class MocksApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }

    init = () => {
        // Post mocks dinamicos.
        this.create("/:users/:products", ["PUBLIC"], createMocks);
        // Get de suma para ver package publicado.
        this.read("/sum/:n1/:n2", ["PUBLIC"], async (req, res) => {
            const { n1, n2 } = req.params;
            const message = `SUMA del numero: ${n1} y el numer: ${n2} .`;
            const response = dividir(n1, n2);
            return res.json200(message, response);
        });
    };
}

const mocksApiRouter = new MocksApiRouter();
export default mocksApiRouter.getRouter();

