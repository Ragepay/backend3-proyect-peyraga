import CustomRouter from "../utils/CustomRouter.util.js";

class ArtilleryApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }

    init = () => {
        // Artillery / Performance Simple y compleja.
        this.read("/simplex", ["PUBLIC"], simplex);
        this.read("/complex", ["PUBLIC"], complex);
    };
}

async function simplex(req, res) {
    let result = 0;
    for (let index = 1; index < 100; index++) {
        result += index;
    }
    res.json200(result);
}

async function complex(req, res) {
    let result = 0;
    for (let index = 1; index < 100000000; index++) {
        result += index;
    }
    res.json200(result);
}

const artilleryApiRouter = new ArtilleryApiRouter();
export default artilleryApiRouter.getRouter();

